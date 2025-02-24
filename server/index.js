import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import BDSS_MAP from './model/BDSS_MAP.js'

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('')

import dotenv from 'dotenv'
import uploadData from './Endpoints/uploadData.js'
import Limiter from './Middleware/rateLimiter.js'
import spamChecker from './Endpoints/antiSpam.js'
const app = express();

dotenv.config()

app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}))


app.get('/', (req, res) => {
  res.send('Anniemesh is a banana.')
})
app.use('/uploadreport',Limiter, uploadData)
app.use('/:userIp/:userId/:text',Limiter, spamChecker )
app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.post('/uploadreport', (req, res) => {
  console.log(req.body)

  const bdReport = new BDSS_MAP({
    location: req.body.location,
    date: req.body.date,
    description: req.body.description,
    source1: req.body.source
  })

  bdReport.save()

  res.status(200).json('woot')
})

