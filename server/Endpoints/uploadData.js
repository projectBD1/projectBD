import express from 'express'
import mongoose from 'mongoose'
import BDSS_MAP from '../model/BDSS_MAP.js'

import { Client } from '@googlemaps/google-maps-services-js'

const client = new Client({})

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    console.log('connection string: ', process.env.CONNECTION_STRING)

    /* get coordinates of location, and verify is correct */
    /* checks if address exists via error, checks if the country is BD */
    client
      .geocode({
        params: {
          address: req.body.location,
          key: process.env.GOOGLE_KEY
        },
        timeout: 1000 // milliseconds
      })
      .then(async (r) => {
        const xCord = r.data.results[0].geometry.location.lng
        const yCord = r.data.results[0].geometry.location.lat
        let country = null

        r.data.results[0].address_components.map((obj) => {
          if (obj.short_name === 'BD') {
            country = 'BD'
            return
          }
        })

        if (country !== 'BD') {
          return res.status(406).json({ data: 'Address either not in Bangladesh or does not exist' })
        } else {
          /* adding request data to mongodb if address verified and coordinates obtained */
          await mongoose.connect(process.env.CONNECTION_STRING)

          const bdReport = await BDSS_MAP.create({
            location: req.body.location,
            date: req.body.date,
            x_coord: xCord,
            y_coord: yCord,
            description: req.body.description,
            source1: req.body.source
          })
          console.log( 'bd report: ', bdReport )

          mongoose.disconnect()

          return res.status(200).json({ data: 'Woot' })
        }
      })
      .catch((e) => {
          return res.status(406).json({ data: 'Address either not in Bangladesh or does not exist' })
      });
  } catch (err) { console.error(err) }
})
export default router
