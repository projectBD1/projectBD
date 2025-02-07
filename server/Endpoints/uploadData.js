import express from 'express'
import mongoose from 'mongoose'
import BDSS_MAP from '../model/BDSS_MAP.js'

import { Client } from '@googlemaps/google-maps-services-js'
import Perspective from 'perspective-api-client'

const client = new Client({})

const router = express.Router()


router.post('/', async (req, res) => {
  try {
    /* test for spam */
    const perspective = new Perspective({apiKey: process.env.GOOGLE_KEY})

    console.log(req.body)
    console.log('connection string: ', process.env.CONNECTION_STRING);

    (async () => {
      try {
        const text = req.body.description

        const result = await perspective.analyze(text, {attributes: ['unsubstantial', 'spam']});

        const toxicity = result

        console.log(toxicity)

        console.log(toxicity.attributeScores.SPAM.summaryScore.value)
        console.log(toxicity.attributeScores.UNSUBSTANTIAL.summaryScore.value)

        /*
        if (toxicity.attributeScores.UNSUBSTANTIAL.summaryScore.value > 0.9) {
          return res.status(200).json({ data: 'spammy data' })
        }
        
        if (toxicity.attributeScores.SPAM.summaryScore.value > 0.9) {
          return res.status(200).json({ data: 'spammy data' })
        }
          */
      } catch (error) {
        console.log("The great error is as so: ", error)
        return res.status(200).json({ data: 'problematic description' })
      }


      /* get coordinates of location, and verify is correct */
      /* checks if address exists via error, checks if the country is BD */
      console.log('now I geocode')

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

          r.data.results[0].address_components.forEach((obj) => {
            if (obj.short_name === 'BD') {
              country = 'BD'
            }
          })

          if (country !== 'BD') {
            console.log("not BD")
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
            console.log('bd report: ', bdReport)

            mongoose.disconnect()

            return res.status(200).json({ data: 'Woot' })
          }
        })
        .catch((e) => {
          console.log("not BD 2")
          return res.status(406).json({ data: 'Address either not in Bangladesh or does not exist' })
        })

    })();
    
  } catch (err) { console.error(err) }
})
export default router
