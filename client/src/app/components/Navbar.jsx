import './Navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <img className='navbar-logo' src='next.svg'/>
            <div>
                <ul className='navbar-links'>
                    <li>Home</li>
                    <li>Map & Report</li>
                    <li>Blog</li>
                    <li>About the Genocide</li>
                    <li>Contact Us</li>
                    <button>Donate</button>
                </ul>
            </div>
        </div>
    )
}; export default Navbar
