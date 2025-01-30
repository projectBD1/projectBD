import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

import mongoose from 'mongoose';
import BDSS_MAP from './model/BDSS_MAP.js';

mongoose.connect("")

app.get('/', (req, res) => {
  res.send('Animesh is a banana.')
})
app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.post('/uploadreport', (req, res) => {
  console.log(req.body)

  const BD_Report = new BDSS_MAP({
    location: req.body.location,
    date: req.body.date,
    description: req.body.description,
    source1: req.body.source,
  })

  bd_Report.save()

  res.status(200).json("woot")
})