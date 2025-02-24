import express from 'express'
import { AkismetClient } from 'akismet-api'
import dotenv from 'dotenv'

dotenv.config()

const router=express.Router()
const key=process.env.AKISMET_KEY

const blog='https://example.com'

const client= new AkismetClient({key, blog})
const isValid=await client.verifyKey()
if (isValid)
{
    console.log("VALID")

}
else console.log("not valid")

router.get('/', async(req,res)=>{

    const {userIp, userId, text}=req.params 

    const comment={
        ip:`${userIp}`, //example for userIp
        useragent:`${userId}`, //example for userId
        content:`${text}` //example for text
    }

    const isSpam=await client.checkSpam(comment)

    if (isSpam)
    {
        console.log("Spam")

    }
    else console.log("Not spam")

})

export default router