'use client';
import '../styles/donationStyle.css';
import { useState, useEffect } from 'react';
import { initializePaddle } from '@paddle/paddle-js';


export default function Organizations() {
  const [isOpen, setIsOpen] = useState(false);
  const [paddle, setPaddle] = useState();
  const [value, setValue] = useState("");
  const [priceName, setPriceName] = useState("");
  const [priceDescription, setPriceDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [visible, setVisible] = useState(false);

  //initializing paddle using useeffect, setting environment to sandbox so we dont get charged actually
  useEffect(() => {

    initializePaddle({
      environment: 'sandbox',
      token: process.env.NEXT_PUBLIC_PADDLE_TEST_TOKEN,
    }).then((paddle) => setPaddle(paddle)); //once instance is ready we set it in the state declared above
  }, []);

  useEffect(() => {
    if (
      value !== undefined &&
      productName !== undefined &&
      priceName !== undefined &&
      productDescription !== undefined &&
      priceDescription !== undefined
    ) {
      handleCheckout();
    }
  }, [value, productName, priceName, priceDescription, productDescription]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setVisible(true);
  };
  const handleCheckout = async () => {
    // if (!paddle) return alert('Paddle not intialized');
    console.log('value is: ', value);
    const response = await fetch('http://localhost:3000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value,
        priceName,
        productName,
        priceDescription,
        productDescription,
      }),
    });
   
    const data = await response.json();
    paddle.Checkout.open({
      transactionId: data.transaction,
      settings: {
        displayMode: 'overlay',
        theme: 'dark',
        successUrl: 'http://localhost:3000/success', //when payment us successful we redirect them to success url
      },
    });
    setValue("");
    setPriceDescription();
    setPriceName();
    setProductDescription();
    setProductName();
  };
  return (
    <div className="master">
      <div className="container">
        <div className="icon">Icon</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="button">
          <div>
            <button className="donateBtn" onClick={() => setIsOpen(true)}>
              Donate
            </button>
            <div className={`popup ${isOpen ? 'open-popup' : ''}`} id="popup">
              <div className="closeX">
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
              <h2>Choose an amount</h2>
              <div className="paymentAmounts">
                <button
                  onClick={() => {
                    setValue("1.00");
                    setPriceDescription('This is price description.');
                    setPriceName('This is price name.');
                    setProductDescription('This is prod description.');
                    setProductName('This is product name');

                  }}
                >
                  $1.00
                </button>
                <button
                  onClick={() => {
                    setValue("3.00");
                    setPriceDescription('This is price description.');
                    setPriceName('This is price name.');
                    setProductDescription('This is prod description.');
                    setProductName('This is product name');
                  }}
                >
                  $3.00
                </button>
                <button
                  onClick={() => {
                    setValue("5.00");
                    setPriceDescription('This is price description.');
                    setPriceName('This is price name.');
                    setProductDescription('This is prod description.');
                    setProductName('This is product name');
                  }}
                >
                  $5.00
                </button>
                <button
                  onClick={() => {
                    setValue("7.00");
                    setPriceDescription('This is price description.');
                    setPriceName('This is price name.');
                    setProductDescription('This is prod description.');
                    setProductName('This is product name');
                  }}
                >
                  $7.00
                </button>
              </div>
              <div className="inputAmount">
                <p>Custom:</p>
                <input
                  onChange={handleChange}
                  placeholder="Enter amount here."
                />
              </div>
              {visible && (
                <button className="closeBtn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
