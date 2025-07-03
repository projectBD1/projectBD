import React, { useState } from 'react';

const CallToAction = ({ isOpen, onOpen }) => {
  return (
    <div style={{
      backgroundColor: '#121212', 
      width: '100%',
      paddingTop: '150px',
      paddingBottom: '150px'
    }}>
      <section style={{
        backgroundColor: '#004830',
        padding: '80px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px'
          }}>Your Support Makes a Difference</h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>Every donation, no matter the size, contributes to positive change in our community.</p>
          <button style={{
            backgroundColor: 'white',
            color: '#004830',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }} onClick={onOpen}>Donate Now</button>
        </div>
      </section>

      <section style={{
        backgroundColor: '#ffffff',
        padding: '60px 0 80px 0',
        color: '#121212',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '40px'
          }}>Other Organizations Making an Impact</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <img src="/facebook.png" alt="Organization 1" style={{width: '80px', height: '80px', marginBottom: '15px'}} />
              <h3 style={{marginBottom: '10px'}}>Placeholder Org</h3>
              <p>Providing education and healthcare services to underprivileged communities worldwide.</p>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <img src="/facebook.png" alt="Organization 2" style={{width: '80px', height: '80px', marginBottom: '15px'}} />
              <h3 style={{marginBottom: '10px'}}>Placeholder Org</h3>
              <p>Working towards environmental conservation and sustainable development practices.</p>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <img src="/facebook.png" alt="Organization 3" style={{width: '80px', height: '80px', marginBottom: '15px'}} />
              <h3 style={{marginBottom: '10px'}}>Placeholder Org</h3>
              <p>Fighting hunger by providing meals and establishing food security programs.</p>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <img src="/facebook.png" alt="Organization 4" style={{width: '80px', height: '80px', marginBottom: '15px'}} />
              <h3 style={{marginBottom: '10px'}}>Placeholder Org</h3>
              <p>Making quality education accessible to children in underserved communities globally.</p>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <img src="/facebook.png" alt="Organization 5" style={{width: '80px', height: '80px', marginBottom: '15px'}} />
              <h3 style={{marginBottom: '10px'}}>Placeholder Org</h3>
              <p>Providing clean drinking water solutions and sanitation facilities in developing regions.</p>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <img src="/facebook.png" alt="Organization 6" style={{width: '80px', height: '80px', marginBottom: '15px'}} />
              <h3 style={{marginBottom: '10px'}}>Placeholder Org</h3>
              <p>Protecting and caring for abandoned animals while promoting responsible pet ownership.</p>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <img src="/facebook.png" alt="Organization 7" style={{width: '80px', height: '80px', marginBottom: '15px'}} />
              <h3 style={{marginBottom: '10px'}}>Placeholder Org</h3>
              <p>Empowering young people through leadership training and skill development programs.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;