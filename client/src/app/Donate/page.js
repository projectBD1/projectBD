'use client';
import Payment from './payment';
// import Organizations from './Components/organizations';
import Navbar from '../components/Navbar';
import NormalNavbar from '../components/NormalNavbar.jsx';
import Header from './NewComponents/header';
// import Body from './Components/body';
import NewBody from './NewComponents/newbody.jsx';;
import './styles/page.css';
import DonationMessage2 from './NewComponents/DonationMessage2.jsx';
import CallToAction from './NewComponents/CallToAction.jsx';
import Footer from '../components/Footer';
import DonationMenu from './NewComponents/DonationMenu.jsx';
import { useState } from 'react';


export default function PayMe() {
  const [isDonationMenuOpen, setIsDonationMenuOpen] = useState(false);
  return (
    <div className="pageContainer">
      <NormalNavbar />
      <div style={{
      }}>
        <Header isOpen={isDonationMenuOpen} onOpen={() => setIsDonationMenuOpen(true)}/>
        <div style={{padding: '10px'}}/>
        <DonationMessage2 />
      </div>
      <CallToAction isOpen={isDonationMenuOpen} onOpen={() => setIsDonationMenuOpen(true)}/>
      <DonationMenu isOpen={isDonationMenuOpen} onClose={() => setIsDonationMenuOpen(false)}/>
      <Footer />
    </div>
  );
}
