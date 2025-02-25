'use client';
import './Banner.css'
import { useState, useEffect } from 'react'

const Banner = () => {
    const [scrollY, setScrollY] = useState(0);

    // Function to update scroll position
    const handleScroll = () => {
        setScrollY(window.scrollY); // Capture the scroll position
    };

    // Adding event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="banner">
            <img className='banner-img' src='fire_in_hand.png' style={{ top: `${40 + scrollY / 10}%` }} /* Adjust the scroll speed *//>
            <div className='banner-text'>
                <h1 className='banner-text-header'>Welcome to ProjectBD Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}; export default Banner