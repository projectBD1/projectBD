import './Footer.css'
const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-container'>

                <div className='footer1'>
                    <img className='footer-logo' src='next.svg'/>
                    <h2>ProjectBD Hindu Support Foundation (Not created Yet)</h2>
                    <p>We imagine a future where Hindu and Muslim Children can play together.
                        A future where hate and violence does not divide us.</p>
                </div>
                <div className='footer2'>
                    <ul className='footer-nav-links'>
                        <li>Home</li>
                        <li>Map & Report</li>
                        <li>Blog</li>
                        <li>About the Genocide</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='footer3'>
                    <h2>Contact Us</h2>
                    <div>contact@projectBD.org</div>
                    <div>1(666)666-6666</div>
                </div>
                <div className='footer4'>
                    <h2>Support</h2>
                    <div>Help support Bangladesh Hindus</div>
                    <button>Donate</button>
                </div>
            
            </div>
            <div className='copyright'>
                Copyright 2025 ProjectBD Hindu Support Foundation
                <div>
                    <img className='footer-social-img' src='facebook.png'/>
                    <img className='footer-social-img' src='twitter.png'/>
                    <img className='footer-social-img' src='instagram.png'/>
                    <img className='footer-social-img' src='linkedIn.png'/>
                </div>
            </div>
        </div>
    )
}; export default Footer