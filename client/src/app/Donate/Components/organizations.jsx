'use client';
import '../styles/donationStyle.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { initializePaddle } from '@paddle/paddle-js';
import sunflowerImg from '../images/sunflower-3304.jpg'
import blueflowerImg from '../images/BlueFlower-985266.jpg'
import redflowerImg from '../images/RedFlower-607013.jpg'

export default function Organizations() {
  const [isOpen, setIsOpen] = useState(false);
  const [paddle, setPaddle] = useState();
  const [value, setValue] = useState('');
  const [priceName, setPriceName] = useState('');
  const [priceDescription, setPriceDescription] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [visible, setVisible] = useState(false);

  //initializing paddle using useeffect, setting environment to sandbox so we dont get charged actually
  useEffect(() => {
    initializePaddle({
      environment: 'sandbox',
      token: process.env.NEXT_PUBLIC_PADDLE_TEST_TOKEN,
    }).then((paddle) => setPaddle(paddle)); //once instance is ready we set it in the state declared above
  }, []);

  // useEffect(() => {
  //   if (
  //     value &&
  //     productName &&
  //     priceName &&
  //     productDescription &&
  //     priceDescription
  //   ) {
  //     console.log('value is: ', value);
  //     handleCheckout();
  //   }
  // }, [value, productName, priceName, priceDescription, productDescription]);

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
  return (
    <div className="master">
      <div className="container">
        <div className="icon"><Image src={sunflowerImg} className='sunflowerImage' alt="An image of a sunflower" width={100} height={100}/></div>
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
            <button
              className="donateBtn"
              onClick={() => {
                setIsOpen(true);
                setPriceDescription('This is price description.');
                setPriceName('This is price name.');
                setProductDescription('This is prod description.');
                setProductName('This is product name');
              }}
            >
              Donate
            </button>
            <div className={`popup ${isOpen ? 'open-popup' : ''}`} id="popup">
              <div className="closeX">
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
              <h2>Choose an amount</h2>
              <div className="paymentAmounts">
                <button
                  onClick={() => 
                    handleCheckout('1.00')

                   
                    // setPriceDescription('This is price description.');
                    // setPriceName('This is price name.');
                    // setProductDescription('This is prod description.');
                    // setProductName('This is product name');
                  }
                >
                  $1.00
                </button>
                <button
                  onClick={() => 
                    handleCheckout('3.00')
                   
                    // setPriceDescription('This is price description.');
                    // setPriceName('This is price name.');
                    // setProductDescription('This is prod description.');
                    // setProductName('This is product name');
                  }
                >
                  $3.00
                </button>
                <button
                    onClick={() => 
                      handleCheckout('5.00')
                     
                      // setPriceDescription('This is price description.');
                      // setPriceName('This is price name.');
                      // setProductDescription('This is prod description.');
                      // setProductName('This is product name');
                    }
                >
                  $5.00
                </button>
                <button
                    onClick={() => 
                      handleCheckout('7.00')
                     
                      // setPriceDescription('This is price description.');
                      // setPriceName('This is price name.');
                      // setProductDescription('This is prod description.');
                      // setProductName('This is product name');
                    }
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
                <button className="closeBtn" onClick={()=>handleCheckout(value)}>
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="icon"><Image src={blueflowerImg} className='sunflowerImage' alt="An image of a sunflower" width={100} height={100}/></div>
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
            <button
              className="donateBtn"
              onClick={() => {
                setIsOpen(true);
                setPriceDescription('This is price description.');
                setPriceName('This is price name.');
                setProductDescription('This is prod description.');
                setProductName('This is product name');
              }}
            >
              Donate
            </button>
            <div className={`popup ${isOpen ? 'open-popup' : ''}`} id="popup">
              <div className="closeX">
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
              <h2>Choose an amount</h2>
              <div className="paymentAmounts">
                <button
                  onClick={() => 
                    handleCheckout('1.00')

                   
                    // setPriceDescription('This is price description.');
                    // setPriceName('This is price name.');
                    // setProductDescription('This is prod description.');
                    // setProductName('This is product name');
                  }
                >
                  $1.00
                </button>
                <button
                  onClick={() => 
                    handleCheckout('3.00')
                   
                    // setPriceDescription('This is price description.');
                    // setPriceName('This is price name.');
                    // setProductDescription('This is prod description.');
                    // setProductName('This is product name');
                  }
                >
                  $3.00
                </button>
                <button
                    onClick={() => 
                      handleCheckout('5.00')
                     
                      // setPriceDescription('This is price description.');
                      // setPriceName('This is price name.');
                      // setProductDescription('This is prod description.');
                      // setProductName('This is product name');
                    }
                >
                  $5.00
                </button>
                <button
                    onClick={() => 
                      handleCheckout('7.00')
                     
                      // setPriceDescription('This is price description.');
                      // setPriceName('This is price name.');
                      // setProductDescription('This is prod description.');
                      // setProductName('This is product name');
                    }
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
                <button className="closeBtn" onClick={()=>handleCheckout(value)}>
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="icon"><Image src={redflowerImg} className='sunflowerImage' alt="An image of a sunflower" width={100} height={100}/></div>
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
            <button
              className="donateBtn"
              onClick={() => {
                setIsOpen(true);
                setPriceDescription('This is price description.');
                setPriceName('This is price name.');
                setProductDescription('This is prod description.');
                setProductName('This is product name');
              }}
            >
              Donate
            </button>
            <div className={`popup ${isOpen ? 'open-popup' : ''}`} id="popup">
              <div className="closeX">
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
              <h2>Choose an amount</h2>
              <div className="paymentAmounts">
                <button
                  onClick={() => 
                    handleCheckout('1.00')

                   
                    // setPriceDescription('This is price description.');
                    // setPriceName('This is price name.');
                    // setProductDescription('This is prod description.');
                    // setProductName('This is product name');
                  }
                >
                  $1.00
                </button>
                <button
                  onClick={() => 
                    handleCheckout('3.00')
                   
                    // setPriceDescription('This is price description.');
                    // setPriceName('This is price name.');
                    // setProductDescription('This is prod description.');
                    // setProductName('This is product name');
                  }
                >
                  $3.00
                </button>
                <button
                    onClick={() => 
                      handleCheckout('5.00')
                     
                      // setPriceDescription('This is price description.');
                      // setPriceName('This is price name.');
                      // setProductDescription('This is prod description.');
                      // setProductName('This is product name');
                    }
                >
                  $5.00
                </button>
                <button
                    onClick={() => 
                      handleCheckout('7.00')
                     
                      // setPriceDescription('This is price description.');
                      // setPriceName('This is price name.');
                      // setProductDescription('This is prod description.');
                      // setProductName('This is product name');
                    }
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
                <button className="closeBtn" onClick={()=>handleCheckout(value)}>
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
