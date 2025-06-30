import { FaHandHoldingHeart, FaBullhorn, FaPeopleCarry } from 'react-icons/fa';
const DonationMessage2 = () => {
  return (
    <div style={{
        width: '100%',
        paddingBottom: '80px',
        paddingTop: '1px',
        position: 'relative',
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/prayer.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            backgroundRepeat: 'no-repeat',
            opacity: 0.2,

        }}></div>

      <div style={{
        width: '90%',
        margin: '0 auto',
      }}>
        <section style={{
          width: '90%',
          margin: '0 auto',
          marginTop: '40px',
          padding: '20px',
          borderRadius: '10px',
          position: 'relative',
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#004830',
            marginBottom: '25px',
            fontWeight: '700',
            textAlign: 'left',
            paddingLeft: '20px',
            borderLeft: '5px solid #004830'
          }}>Make an Impact Today</h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            color: '#555',
            maxWidth: '800px',
            marginLeft: '25px',
            lineHeight: '1.8',
            fontWeight: '400',
            textAlign: 'left'
          }}>Your contribution helps create lasting change. Join us in making a difference for Banglesh.</p>
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          width: '90%',
          margin: '0 auto',
          position: 'relative',
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            padding: '25px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            height: '320px',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '15px', 
              borderBottom: '2px solid #004830', 
              paddingBottom: '10px' 
            }}>
              <FaHandHoldingHeart size={30} color="#004830" />
              <h3 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                color: '#004830',
                margin: '0'
              }}>Donation</h3>
            </div>
            <p style={{
              color: '#444',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '15px'
            }}>Your donations provide immediate assistance to families affected by persecution, including emergency shelter, food, and medical care in crisis situations.</p>
            <button style={{
              backgroundColor: '#004830',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              alignSelf: 'flex-start',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)'
            }}>Learn More</button>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            padding: '25px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            height: '320px',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '15px', 
              borderBottom: '2px solid #004830', 
              paddingBottom: '10px' 
            }}>
              <FaBullhorn size={30} color="#004830" />
              <h3 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                color: '#004830',
                margin: '0'
              }}>Advocate</h3>
            </div>
            <p style={{
              color: '#444',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '15px'
            }}>Advocate those who are the victims of religious persecution! Be the voice of those who cannot speak and help them seek justice and protect their fundamental human rights.</p>
            <button style={{
              backgroundColor: '#004830',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              alignSelf: 'flex-start',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)'
            }}>Get Involved</button>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            padding: '25px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            height: '320px',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '15px', 
              borderBottom: '2px solid #004830', 
              paddingBottom: '10px' 
            }}>
              <FaPeopleCarry size={30} color="#004830" />
              <h3 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                color: '#004830',
                margin: '0'
              }}>Support</h3>
            </div>
            <p style={{
              color: '#444',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '15px'
            }}>Join our movement to inform the world on the genocide in Bangladesh. We need brave volunteers who are willing to stand with us in front of tyranny.</p>
            <button style={{
              backgroundColor: '#004830',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              alignSelf: 'flex-start',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)'
            }}>Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationMessage2;