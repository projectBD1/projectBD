'use client';

import './NormalNavbar.css'
import { useState, useEffect } from 'react';

const NormalNavbar = () => {
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

        <div className={`navbar `}>
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
            <img className='navbar-hamburger' src='Hamburger_icon1.png'/>
            </div>
        </div>

    )
}; export default NormalNavbar