import express from 'express'
import {getAuthenticatedUser, lemonSqueezySetup} from "@lemonsqueezy/lemonsqueezy.js"
import dotenv from 'dotenv'

dotenv.config()

const lemonKey=process.env.LEMONSQUEEZY_API_KEY

const router=express.Router()



router.get('/',async(req,res)=>{    

    lemonSqueezySetup({
        lemonKey,
        onError:(error)=>console.error("Error!", error),
    })
    
    const {data,error}=await getAuthenticatedUser();
    
    if (error){
        console.log(error.message)
    }
    
    else{
        console.log(data)
    }
    



})
export default router