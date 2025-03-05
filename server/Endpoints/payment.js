// import express from 'express'
// import {getAuthenticatedUser, lemonSqueezySetup} from "@lemonsqueezy/lemonsqueezy.js"
// import dotenv from 'dotenv'

// dotenv.config()

// const lemonKey=process.env.LEMONSQUEEZY_API_KEY

// const router=express.Router()

// router.get('/',async(req,res)=>{

//     lemonSqueezySetup({
//         lemonKey,
//         onError:(error)=>console.error("Error!", error),
//     })

//     const {data,error}=await getAuthenticatedUser();

//     if (error){
//         console.log(error.message)
//     }

//     else{
//         console.log(data)
//     }

// })
// export default router

//using paddle:

import express from 'express';
import dotenv from 'dotenv';
import { Environment, LogLevel, Paddle } from '@paddle/paddle-node-sdk';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    value,
    priceName,
    productName,
    priceDescription,
    productDescription,
  } = req.body;
  console.log('Amount is', value);
  let finalValue = value.replace(/[^0-9]/g, '');
  if (finalValue === value) {
    Number(finalValue)
    Number(value)
    finalValue=value*100;
  }
  console.log('Final value: ', finalValue);
  Number(finalValue);

  const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN, {
    environment: Environment.sandbox,
  });

  const transaction = await paddle.transactions.create({
    items: [
      {
        quantity: 1,
        price: {
          name: `${priceName}`, //how often product bills
          description: `${priceDescription}`,
          unitPrice: {
            currencyCode: 'USD',
            amount: `${finalValue}`, //30 dollars--> 3000
          },
          product: {
            name: `${productName}`,
            description: `${productDescription}`,
            taxCategory: 'saas',
          },
        },
      },
    ],
  });
  console.log(transaction);

  return res.json({ transaction: transaction.id });
});

export default router;
