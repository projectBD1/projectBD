import './Navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
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
    )
}; export default Navbar
