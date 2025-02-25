'use client';

import './Navbar.css'
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
                    <li>Home</li>
                    <li>About the Genocide</li>
                    <li>Map & Report</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <button className='navbar-donate-button'>Donate</button>
                </ul>
            </div>
        </div>

        </div>
    )
}; export default Navbar
