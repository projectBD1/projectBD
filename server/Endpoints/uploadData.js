import express from 'express'
import mongoose from 'mongoose'
import BDSS_MAP from '../model/BDSS_MAP.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    console.log('connection string: ', process.env.CONNECTION_STRING)
    await mongoose.connect(process.env.CONNECTION_STRING)

    const bdReport = await BDSS_MAP.create({
      location: req.body.location,
      date: req.body.date,
      description: req.body.description,
      source1: req.body.source
    })
    console.log('bd report: ', bdReport)



    res.status(200).json({ data: 'Woot' })

    mongoose.disconnect()
  } catch (err) {console.error(err)}
})
export default router
