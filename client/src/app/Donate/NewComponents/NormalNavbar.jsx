'use client';

import normalNav from '../styles/NormalNavbar.module.css'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const NormalNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  

  return (
    <div className={normalNav.navbarContainer}>
      <div className={normalNav.navbar}>
        <img className={normalNav.navbarLogo} src="next.svg" />
        <div>
          <ul className={normalNav.navbarLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About the Genocide</Link>
            </li>
            <li>
              <Link href="/map">Map & Report</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <button className={normalNav.navbarDonateButton}>
              <Link href="/Donate">Donate</Link>
            </button>
          </ul>
          <img className={normalNav.navbarHamburger} src="Hamburger_icon1.png" />
        </div>
      </div>
    </div>
  );
};
export default NormalNavbar;
