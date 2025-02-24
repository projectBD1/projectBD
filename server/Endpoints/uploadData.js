import express from 'express'
import mongoose from 'mongoose'
import BDSS_MAP from '../model/BDSS_MAP.js'
import dotenv from 'dotenv'
import moment from 'moment-timezone'
import { Client } from '@googlemaps/google-maps-services-js'
import Perspective from 'perspective-api-client'
import Groq from 'groq-sdk'

dotenv.config()

const client = new Client({})
const perspective = new Perspective({apiKey: process.env.GOOGLE_KEY})

const router = express.Router()

const toxic_traits = ['severe_toxicity', 'identity_attack', 'insult', 'threat', 'unsubstantial', 'spam', 'incoherent']

async function Toxicity(req) {
  const text = req.body.description
  console.log('toxicity text:', text)

  const toxicity = await perspective.analyze(text, {attributes: toxic_traits});
  
  // console.log(toxicity.attributeScores)

  return toxicity.attributeScores
}

async function geocode(req) {
  var country = null
  var xCord = null
  var yCord = null

  await client
    .geocode({
      params: {
        address: req.body.location,
        key: process.env.GOOGLE_KEY
      },
      timeout: 1000 // milliseconds
    })
    .then(async (r) => {
      xCord = r.data.results[0].geometry.location.lng
      yCord = r.data.results[0].geometry.location.lat

      r.data.results[0].address_components.forEach((obj) => {
        if (obj.short_name === 'BD') {
          country = 'BD'
        }
      })
    })
    .catch((e) => {
      // console.log(e)
    })

  return [country, yCord, xCord]
}

async function mongodongo (req, xCord, yCord, summary_ai) {
  await mongoose.connect(process.env.CONNECTION_STRING)

  const bdReport = await BDSS_MAP.create({
    date: req.body.date,
    division: req.body.division,
    district: req.body.district,
    location: req.body.location,
    x_coord: xCord,
    y_coord: yCord,
    description: req.body.description,
    source1: req.body.source,
    ai_summary: summary_ai

  })
  console.log('bd report: ', bdReport)

  mongoose.disconnect()
}

function isValidPastDateUsingEarliestTimeZone(dateString) {
  // Parse the date using the earliest time zone, Pacific/Kiritimati (UTC+14)
  const date = moment.tz(dateString, 'Pacific/Kiritimati'); // Convert the date to UTC+14

  // Check if the date is valid and not in the future
  const now = moment.tz('Pacific/Kiritimati'); // Current time in UTC+14
  return date.isValid() && date.isBefore(now);
}

const groq = new Groq({ apiKey: process.env.GROQ_KEY });

async function summarize(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        'role': 'user',
        'content': prompt
      }
    ],
    "model": "llama-3.3-70b-versatile",
    "temperature": 1,
    "max_completion_tokens": 1024,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  var output = ''
  for await (const chunk of chatCompletion) {
    //process.stdout.write(chunk.choices[0]?.delta?.content || '');
    output = output + (chunk.choices[0]?.delta?.content || '')
  }

  return output
}






router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    console.log('connection string: ', process.env.CONNECTION_STRING)

    /* determine if the description is spam or malicious */

    // first do basic checks on the data
    if (req.body.location === '' || req.body.date === '' || req.body.description.len < 5) {
      return res.status(400).json({data: 'Bad upload'})
    }
    
    if (!isValidPastDateUsingEarliestTimeZone(req.body.date)) {
      console.log("date fails")
      return res.status(400).json({data: 'Bad upload date'})
    }
    console.log("date passes")



    /*
    // check if description is malicious or spam
    
    const toxicity = await Toxicity(req)

    // need logic to decide if spam, based on toxicity values
    console.log(toxicity)

    var totalToxicity = 0 

    toxic_traits.forEach((trait) => {
      // console.log(toxicity[trait.toUpperCase()])
      if (toxicity[trait.toUpperCase()].summaryScore.value > totalToxicity) {
        totalToxicity = toxicity[trait.toUpperCase()].summaryScore.value
      }
    })

    if(totalToxicity > 0.85) {
      return res.status(400).json({ data: 'you toxic boy' })
    }
    */



    /* get coordinates of the location */
    const [country, yCord, xCord] = await geocode(req)
    console.log(country, yCord, xCord)

    /* checks if address is in BD */
    if (country !== 'BD') {
      return res.status(406).json({ data: 'Address either not in Bangladesh or does not exist' })
    }

    /* if there is a source, create an AI summary of it */
    var summary_ai = null
    if (req.body.source !== '') {
          //const prompt1 = 'If there was no article sent to you, or what was sent was not an article, response with (No article). If there was an article, but it is not related to the topic of violence against Hindus, response with (Not related). If the article is related to the topic of violence against Hindus, provide an extremely detailed summary of the events and findings of the article' + req.body.source
          const prompt = 'If this is not an article/news, response that it is not one. If this is an article/news, summarize it if it is related to the topic of violence in Bangladesh usually against Hindus, the summary should be very detailed. If it is not related, respond that it is not related. ' + req.body.source
          summary_ai = await summarize(prompt)
    }
    
    /* adding request data to mongodb */
    await mongodongo(req, xCord, yCord, summary_ai)
    return res.status(200).json({ data: 'Woot' })

  } catch (err) { console.error(err) }
})
export default router
