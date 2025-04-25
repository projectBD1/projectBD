'use client';
import '../styles/header.css';
import helpingHands from '../images/helpinghands-6146693.jpg';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { initializePaddle } from '@paddle/paddle-js';

export default function Header({ isOpen, onOpen }) {
  //Mesh's stinky old code
  /*
  const [isOpen, setIsOpen] = useState(false);
  const [paddle, setPaddle] = useState();
  const [value, setValue] = useState('');
  const [priceName, setPriceName] = useState('');
  const [priceDescription, setPriceDescription] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initializePaddle({
      environment: 'sandbox',
      token: process.env.NEXT_PUBLIC_PADDLE_TEST_TOKEN,
    }).then((paddle) => setPaddle(paddle)); //once instance is ready we set it in the state declared above
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    setVisible(true);
  };

  const handleCheckout = async (newvalue) => {
    //if (!paddle) return alert('Paddle not intialized');
    console.log('value is2: ', value);
    const response = await fetch('http://localhost:3000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: newvalue,
        priceName: priceName,
        productName: productName,
        priceDescription: priceDescription,
        productDescription: productDescription,
      }),
    });
    const data = await response.json();
    if (data.transaction=="Payment Failure"){alert("You must enter a valid, non-zero amount. Please try again.")}
    console.log("Data.transaction is: ", data.transaction)
    paddle.Checkout.open({
      transactionId: data.transaction,
      settings: {
        displayMode: 'overlay',
        theme: 'dark',
        successUrl: 'http://localhost:3000/success', //when payment us successful we redirect them to success url
      },
    });
    // setValue('');
    // setPriceDescription();
    // setPriceName();
    // setProductDescription();
    // setProductName();
  };
  */

  return (
    <div className="headerMaster">
      <div className="header">
        <div className="call">Make A Difference</div>
        <div className="donateButton">
          <button onClick={onOpen}>
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
