import Link from 'next/link';
import './Footer.css';
const Footer = () => {
    return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer1">
          <img className="footer-logo" src="next.svg" loading="lazy" />
          <h2>ProjectBD Hindu Support Foundation</h2>
          <p>
            We imagine a future where Hindu and Muslim Children can play
            together. A future where hate and violence does not divide us.
          </p>
        </div>
        <div className="footer-container234">
          <div className="footer2">
            <ul className="footer-nav-links">
              <h2>Navigation</h2>
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
            </ul>
          </div>
          <div className="footer4">
            <h2>Support</h2>
            <div className="footer-support-text-container">
              <div className="footer-support-text">
                Help support Bangladesh Hindus
              </div>
              <div className="footer-support-text">
                Donate to us or other organizations
              </div>
            </div>
            <button className="footer-support-button">
              <Link href="/Donate">Donate</Link>
            </button>
          </div>
          <div className="footer3">
            <h2>Contact Us</h2>
            <div className="footer-contact-text">Phone: 1(862)234-0089</div>
            <div className="footer-contact-text">
              Email: contact@projectBD.org
            </div>
            <div className="footer-contact-text">
              Mail: 123 Sesame Street, {<br />} NY, NY 10010
            </div>
            <div className="footer-contact-text">X: projectBD6</div>
            <div className="footer-contact-text">Instagram: projectBD6</div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>Copyright 2025 ProjectBD Hindu Support Foundation</div>
        <div className="copyright-social">
          <img
            className="footer-social-img"
            src="facebook.png"
            loading="lazy"
          />
          <a href="https://x.com/projectBD6" target='_blank'>
            <img
              className="footer-social-img"
              src="twitter.png"
              loading="lazy"
            />
          </a>
          <a href="https://www.instagram.com/projectbd6/" target='_blank'>
            <img
              className="footer-social-img"
              src="instagram.png"
              loading="lazy"
            />
          </a>
          <img
            className="footer-social-img"
            src="linkedin.png"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
