import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Branding Section */}
        <div className="footer-branding">
          <h2>Shiksha</h2>
          <p>Empowerment through Education</p>
          <div className="footer-info-block">
            <div className="footer-info-column">
              <h4>Address:</h4>
              <p>Gurgaon<br />Aizawl, Mizoram</p>
            </div>
            <div className="footer-info-column">
              <h4>Contact:</h4>
              <p>+91 xxxxxxxxxx</p>
            </div>
          </div>
        </div>

        {/* Navigation Groups */}
        <div className="footer-footer-nav">
          <div className="footer-nav-group">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/">Feedback</a></li>
            </ul>
          </div>
          <div className="footer-nav-group">
            <h4>Classes</h4>
            <ul>
              <li><a href="#class8">Class 8</a></li>
              <li><a href="#class9">Class 9</a></li>
              <li><a href="#class10">Class 10</a></li>
              <li><a href="#class11">Class 11</a></li>
              <li><a href="#class12">Class 12</a></li>
            </ul>
          </div>
          <div className="footer-nav-group">
            <h4>Subjects</h4>
            <ul>
              <li><a href="#english">English</a></li>
              <li><a href="#math">Mathematics</a></li>
              <li><a href="#physics">Physics</a></li>
              <li><a href="#chemistry">Chemistry</a></li>
              <li><a href="#biology">Biology</a></li>
              <li><a href="#computer">Computer</a></li>
            </ul>
          </div>
          <div className="footer-nav-group">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-social-icons">
          <a href="https://www.facebook.com/profile.php?id=61580053190184" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/shikshacom/" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.youtube.com/@Shikshacom-edu" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
        </div>
        <div className="copyright">
          ©2025, Shiksha.inc
        </div>
      </div>
    </footer>
  );
};

export default Footer;
