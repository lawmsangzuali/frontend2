import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  {/*const [contrast, setContrast] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [language, setLanguage] = useState('EN');

  const toggleContrast = () => {
    setContrast(!contrast);
    document.body.classList.toggle('high-contrast');
  };

  const increaseFont = () => {
    setFontSize(prev => Math.min(prev + 0.1, 1.5));
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
  };

  const decreaseFont = () => {
    setFontSize(prev => Math.max(prev - 0.1, 0.8));
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
  };

  const switchLanguage = () => {
    setLanguage(language === 'EN' ? 'हिंदी' : 'EN');
  }; */}

  return (
    <>
      {/* Top Slim Strip */}
     {/* <div className="top-strip">
        <div className="strip-text">
        </div>
        <div className="strip-controls">
          <button onClick={toggleContrast} className="accessibility-btn" aria-label="Toggle contrast">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </button>
          <button onClick={decreaseFont} className="accessibility-btn" aria-label="Decrease font size">
            A-
          </button>
          <button onClick={increaseFont} className="accessibility-btn" aria-label="Increase font size">
            A+
          </button>
          <button onClick={switchLanguage} className="language-btn">
            {language}
          </button>
        </div>
      </div> */} 

      {/* Main Header */}
      <header className="main-header">
        <div className="header-left">
           <Link to="/"
            className="brand-link"
            style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }} >
          <img src="/Shiksha.png" alt="Shiksha Logo" className="logo" />
          <div className="title">
            <h1>ShikshaCom</h1>
          </div>
          </Link>
        </div>
       {/* <div className="header-right">
          <span className="badge">Student Dashboard</span>
          <span className="badge">Teacher Dashboard</span>
          <span className="badge">Advance Teachings</span>
          <span className="badge">Career Councelling</span>
          <span className="badge">Digital India</span>
        </div> */} 
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <Link to="/about">About</Link>
            <ul className="dropdown-menu">
              <li><Link to="/vision">Our Vision</Link></li>
              <li><Link to="/mission">Our Mission</Link></li>
              <li><Link to="/values">Our Values</Link></li>
              <li><Link to="/why-shiksha">Why Shiksha?</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#registration">Registration</a>
            <ul className="dropdown-menu">
              <li><Link to="/login">Students</Link></li>
              <li><Link to="/upcoming">Teachers</Link></li>
              <li><Link to="/upcoming">Experts</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="/services">Services</a>
            <ul className="dropdown-menu">
              <li><a href="#school-L1">School-L1</a></li>
              <li><a href="#school-L2">School-L2</a></li>
              <li><a href="#advance-learning">Advance Learning</a></li>
              <li><a href="#software-devlopment">Software Development</a></li>
            </ul> 
          </li>
               <li className="nav-item dropdown">
            <a href="#genral-studies">General Studies</a>
            <ul className="dropdown-menu">
              <li><Link to="/current-affairs">Current Affairs</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <span className="locked-link">
              Counselling <span className="lock-icon">🔒</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="locked-link">
              Forum <span className="lock-icon">🔒</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="locked-link">
              Reddit-Ref <span className="lock-icon">🔒</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="locked-link">
              Placements <span className="lock-icon">🔒</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="locked-link">
              Training <span className="lock-icon">🔒</span>
            </span>
          </li>

           <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
          
        </ul>
      </nav>

    </>
  );
};

export default Navbar;
