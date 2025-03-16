'use client';
import '../styles/donationStyle.css';
import helpingHands from '../images/helpinghands-6146693.jpg';
import Image from 'next/image';

export default function Header() {
  const scrollToMaster = () => {
   
    const masterSection = document.getElementById('masterSection');
    if (masterSection) {
      masterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="headerMaster">
      <div className="header">
        <div className='call'>Make A Difference</div>
        <div className="donateButton">
          <button onClick={scrollToMaster}>Donate</button>
        </div>
      </div>
    </div>
  );
}
