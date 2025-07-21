'use client';
import { useState } from 'react';
import NormalHeader from '../components/NormalNavbar';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Footer from '../components/Footer';
export default function Contactpage() {
    const backgroundImage = '/bangladeshprotest.avif';
    
    return (
        <div className="contact-page">
            <NormalHeader/>
            
            {/* Hero Section */}
            <div className="contact-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Contact Us</h1>
                    <p>We're here to listen and help make a difference together</p>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                        <span style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', height: '24px' }}>
                            <FaMapMarkerAlt size={22} color="#004830"/>
                        </span>
                        <div>
                            <h3>Address</h3>
                            <p>N/A<br />New York, NY 10001</p>
                        </div>
                    </div>
                    <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                        <span style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', height: '24px' }}>
                            <FaPhone size={22} color="#004830"/>
                        </span>
                        <div>
                            <h3>Phone</h3>
                            <p>1(862) 234-0089</p>
                        </div>
                    </div>
                    <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                        <span style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', height: '24px' }}>
                            <FaEnvelope size={22} color="#004830"/>
                        </span>
                        <div>
                            <h3>Email</h3>
                            <p>contact.projectbd@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                        <span style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', height: '24px' }}>
                            <FaClock size={22} color="#004830"/>
                        </span>
                        <div>
                            <h3>Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 5:00 PM<br />
                            Saturday - Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input type="text" id="name" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input type="email" id="email" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input type="text" id="subject" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea id="message" rows="5" required></textarea>
                        </div>

                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="footer-spacer"></div>

            <style jsx>{`
                .contact-page {
                    width: 100%;
                    background-color: #ffffff;
                    min-height: 100vh;
                }

                .contact-hero {
                    height: 400px;
                    width: 100%;
                    background-image: url('${backgroundImage}');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 80px;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 72, 48, 0.6);
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    color: white;
                }

                .hero-content h1 {
                    font-size: 4rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }

                .hero-content p {
                    font-size: 1.5rem;
                    opacity: 0.95;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
                }

                .contact-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    gap: 60px;
                    margin-bottom: 80px;
                }

                .contact-info {
                    flex: 1;
                    min-width: 300px;
                    background: #f8f9fa;
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
                }

                .contact-info h2 {
                    color: #004830;
                    font-size: 2.2rem;
                    margin-bottom: 35px;
                    font-weight: 700;
                }

                .info-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    margin-bottom: 25px;
                    padding: 25px;
                    background: white;
                    border-radius: 15px;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(0,72,48,0.1);
                }

                .info-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }

                .info-item h3 {
                    color: #004830;
                    margin-bottom: 10px;
                    font-size: 1.3rem;
                    font-weight: 600;
                }

                .info-item p {
                    color: #666;
                    line-height: 1.7;
                    font-size: 1.1rem;
                }

                .contact-form {
                    flex: 2;
                    min-width: 400px;
                    background: white;
                    padding: 50px;
                    border-radius: 20px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
                }

                .contact-form h2 {
                    color: #004830;
                    font-size: 2.2rem;
                    margin-bottom: 35px;
                    font-weight: 700;
                }

                .form-row {
                    display: flex;
                    gap: 25px;
                    margin-bottom: 25px;
                }

                .form-group {
                    flex: 1;
                }

                label {
                    display: block;
                    margin-bottom: 10px;
                    color: #004830;
                    font-weight: 500;
                    font-size: 1.1rem;
                }

                input, textarea {
                    width: 100%;
                    padding: 15px;
                    border: 2px solid #e0e0e0;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    background: #f8f9fa;
                    color: #333;
                }

                input:focus, textarea:focus {
                    outline: none;
                    border-color: #004830;
                    background: white;
                    box-shadow: 0 0 0 4px rgba(0,72,48,0.1);
                }

                textarea {
                    resize: vertical;
                    min-height: 150px;
                }

                .submit-button {
                    background-color: #004830;
                    color: white;
                    padding: 18px 35px;
                    border: none;
                    border-radius: 12px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    width: 100%;
                    margin-top: 25px;
                    box-shadow: 0 4px 15px rgba(0,72,48,0.2);
                }

                .submit-button:hover {
                    background-color: #003820;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0,72,48,0.3);
                }

                .footer-spacer {
                    height: 200px;
                    background-image: url('${backgroundImage}');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    position: relative;
                }

                .footer-spacer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 72, 48, 0.6);
                }

                @media (max-width: 968px) {
                    .contact-container {
                        flex-direction: column;
                        padding: 20px;
                    }

                    .contact-form, .contact-info {
                        min-width: 100%;
                        padding: 30px;
                    }

                    .form-row {
                        flex-direction: column;
                        gap: 20px;
                    }

                    .hero-content h1 {
                        font-size: 3rem;
                    }

                    .hero-content p {
                        font-size: 1.2rem;
                    }
                }
            `}</style>

            <Footer/>
        </div>
    );
}