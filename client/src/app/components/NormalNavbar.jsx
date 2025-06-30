'use client';

import normalNav from './NormalNavbar.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NormalNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const handleLogoClick = () => {
        router.push('/'); // Navigate to the homepage
    };

  const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the dropdown menu
    };

  return (
    <div className={normalNav.navbarContainer}>
      <div className={normalNav.navbar}>
        <img className={normalNav.navbarLogo} onClick={handleLogoClick} src="next.svg" />
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
          <img className={normalNav.navbarHamburger} onClick={toggleMenu} src="Hamburger_icon1.png" />
        </div>
      </div>

      {menuOpen && (
        <div className={normalNav.navbarDropdown}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About the Genocide</Link></li>
                <li><Link href="/map">Map & Report</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/Donate">Donate</Link></li>
            </ul>
        </div>
    )}
    </div>
  );
};
export default NormalNavbar;
