import React from 'react';

const CallToAction = () => {
  return (
    <div style={{
      backgroundColor: '#121212', 
      width: '100%',
      paddingTop: '50px',
      paddingBottom: '50px'
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
          }}>Donate Now</button>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;