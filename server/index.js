import express from 'express'
import cors from 'cors'
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
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Anniemesh is a banana.')
})
app.use('/uploadreport',Limiter, uploadData)
app.use('/:userIp/:userId/:text',Limiter, spamChecker )
app.listen(3000, () => {
  console.log('Listening on port 3000')
})

