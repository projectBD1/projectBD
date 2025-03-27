'use client';

import './Navbar.css'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>

        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <img className='navbar-logo' src='next.svg'/>
            <div>
                <ul className='navbar-links'>
                    <li><Link href= "/">Home</Link></li>
                    <li><Link href="/about">About the Genocide</Link></li>
                    <li><Link href="/map">Map & Report</Link></li>
                    <li><Link href= "/blog">Blog</Link></li>
                    <li><Link href= "/contact">Contact Us</Link></li>
                    <button className='navbar-donate-button'><Link href= "/Donate">Donate</Link></button>
                </ul>
            <img className='navbar-hamburger' src='Hamburger_icon1.png'/>
            </div>
        </div>

        </div>
    )
}; export default Navbar
