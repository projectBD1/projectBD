import { FaHandHoldingHeart, FaBullhorn, FaPeopleCarry } from 'react-icons/fa';
const DonationMessage2 = () => {
  return (
    <div style={{
        width: '100%',
        paddingBottom: '80px',
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
            backgroundPosition: 'center 35%', // Adjusted to show head at better position
            backgroundRepeat: 'no-repeat',
            opacity: 0.2,
        }}></div>
      <section style={{
        width: '90%',
        margin: '0 auto',
        marginTop: '40px',
        padding: '20px',
        borderRadius: '10px'
      }}>
        <h2 style={{
          fontSize: '3rem',
          color: '#004830',
          marginBottom: '25px',
          fontWeight: '700',
          textAlign: 'left',
          paddingLeft: '20px',
          borderLeft: '5px solid #004830'
        }}>Make an Impact Today</h2>
        <p style={{
          fontSize: '1.3rem',
          color: '#555',
          maxWidth: '800px',
          marginLeft: '25px',
          lineHeight: '1.8',
          fontWeight: '400',
          textAlign: 'left'
        }}>Your contribution helps create lasting change. Join us in making a difference in communities that need it most.</p>
      </section>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        width: '90%',
        margin: '0 auto'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          padding: '40px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
          width: '100%',
          height: '0',
          paddingBottom: '66.67%', // This creates 3:2 aspect ratio
          position: 'relative',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }
        }}>
          <div style={{ 
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            marginBottom: '20px', 
            borderBottom: '2px solid #004830', 
            paddingBottom: '10px' 
          }}>
            <FaHandHoldingHeart size={30} color="#004830" />
            <h3 style={{
              fontSize: '2rem',
              color: '#004830',
              margin: '0'
            }}>Donation</h3>
          </div>
          <p style={{
            position: 'absolute',
            top: '120px',
            left: '40px',
            right: '40px',
            color: '#444',
            fontSize: '1.1rem',
            lineHeight: '1.7'
          }}>Your donations provide immediate assistance to families affected by persecution, including emergency shelter, food, and medical care in crisis situations.</p>
          <button style={{
            position: 'absolute',
            bottom: '20px',
            left: '40px',
            backgroundColor: '#004830',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}>Learn More</button>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          padding: '40px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
          width: '100%',
          height: '0',
          paddingBottom: '66.67%', // This creates 3:2 aspect ratio
          position: 'relative',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }
        }}>
          <div style={{ 
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            marginBottom: '20px', 
            borderBottom: '2px solid #004830', 
            paddingBottom: '10px' 
          }}>
            <FaBullhorn size={30} color="#004830" />
            <h3 style={{
              fontSize: '2rem',
              color: '#004830',
              margin: '0'
            }}>Advocate</h3>
          </div>
          <p style={{
            position: 'absolute',
            top: '120px',
            left: '40px',
            right: '40px',
            color: '#444',
            fontSize: '1.1rem',
            lineHeight: '1.7'
          }}>We provide legal assistance and advocacy for victims of religious persecution, helping them seek justice and protect their fundamental rights.</p>
          <button style={{
            position: 'absolute',
            bottom: '20px',
            left: '40px',
            backgroundColor: '#004830',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}>Get Involved</button>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          padding: '40px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
          width: '100%',
          height: '0',
          paddingBottom: '66.67%', // This creates 3:2 aspect ratio
          position: 'relative',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }
        }}>
          <div style={{ 
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            marginBottom: '20px', 
            borderBottom: '2px solid #004830', 
            paddingBottom: '10px' 
          }}>
            <FaPeopleCarry size={30} color="#004830" />
            <h3 style={{
              fontSize: '2rem',
              color: '#004830',
              margin: '0'
            }}>Support</h3>
          </div>
          <p style={{
            position: 'absolute',
            top: '120px',
            left: '40px',
            right: '40px',
            color: '#444',
            fontSize: '1.1rem',
            lineHeight: '1.7'
          }}>Supporting long-term initiatives including education programs, vocational training, and community rebuilding projects to ensure sustainable development.</p>
          <button style={{
            position: 'absolute',
            bottom: '20px',
            left: '40px',
            backgroundColor: '#004830',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default DonationMessage2;