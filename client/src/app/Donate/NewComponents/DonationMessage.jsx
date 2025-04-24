import React from 'react';
import '../styles/DonationMessage.css';
import { FaHandHoldingHeart, FaBullhorn, FaPeopleCarry } from 'react-icons/fa';

const DonationMessage = () => {
  return (
    <div className='message-container-master'>
    <div className='message-container'>
      <div className='message-box'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaHandHoldingHeart size={30} />
          <h2 className='message-box-title'>Donate</h2>
        </div>
        <p className='message-box-text1'>Support our cause through financial contributions</p>
        <div className='message-box-text2'>Your contribution can provide urgent relief, legal support, and resources to those in need. to Hindus in Bangladesh facing religious persecution. Every donation helps protect lives and preserve communities.</div>
      </div>
      
      <div className='message-box'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaBullhorn size={30} />
          <h2 className='message-box-title'>Advocate</h2>
        </div>
        <p className='message-box-text1'>Spread awareness and be a voice for change</p>
        <div className='message-box-text2'>Raise awareness about the challenges Hindus in Bangladesh face. By sharing their stories and pushing for action, you can bring international attention and pressure for change.</div>
      </div>
      
      <div className='message-box'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaPeopleCarry size={30} />
          <h2 className='message-box-title'>Support</h2>
        </div>
        <p className='message-box-text1'>Join our community and help make a difference</p>
        <div className='message-box-text2'>Stand in solidarity by offering help through volunteering, spreading awareness, and supporting families. Every act of kindness strengthens the fight against injustice.</div>
      </div>
    </div>
    </div>
  );
};

export default DonationMessage;
