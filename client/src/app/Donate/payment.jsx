
'use client';

import { initializePaddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";


export default function Payment(){

    //storing the paddle instance that we made using useEffect in the state below
    const[paddle,setPaddle]=useState()


    //initializing paddle using useeffect, setting environment to sandbox so we dont get charged actually
useEffect(()=>{
    initializePaddle(
        {
            environment:'sandbox',
            token: process.env.NEXT_PUBLIC_PADDLE_TEST_TOKEN,
        }
    ).then((paddle)=>setPaddle(paddle));//once instance is ready we set it in the state declared above
},[]);

const handleCheckout=()=>{
    if(!paddle) return alert("Paddle not intialized");

    paddle.Checkout.open({
        items:[

           { priceId:'pri_01jmzcs61dt169kxgk5ye7evf7', quantity:1}
        ],
        settings:{
            displayMode:'overlay',
            theme:'dark',
            successUrl:'http://localhost:3000/success',//when payment us successful we redirect them to success url
        }
    })
}


    return <button onClick={handleCheckout}>Proceed to payment</button>
}