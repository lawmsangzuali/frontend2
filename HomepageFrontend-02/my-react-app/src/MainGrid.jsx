import '../css/MainGrid.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const MainGrid = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const notifications = [
    "New JEE courses now available!",
    "Live classes starting this week",
    "Scholarship opportunities for students",
    "Teacher training programs open",
    "Upcoming career counselling sessions",
    "Digital India initiative updates",
    "Admission guidance for abroad",
    "Skill development workshops"
  ];

  // Create a very long list for smooth infinite scrolling
  const longNotificationsList = [...notifications, ...notifications, ...notifications, ...notifications, ...notifications, ...notifications, ...notifications, ...notifications, ...notifications, ...notifications]; // 10x duplication

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => prev + 60); // Move up by 60px (height of one notification)
    }, 2000); // Change notification every 2 seconds for smoother rolling

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { title: "JEE Preparation", description: "Comprehensive course for engineering aspirants" },
    { title: "NEET Preparation", description: "Medical entrance exam coaching" },
    { title: "Class 12 MBSE", description: "Complete board exam preparation" },
    { title: "Advance Learning", description: "Specialized courses for higher studies" },
    { title: "Career Counseling", description: "Guidance for future career paths" },
    { title: "Skill Development", description: "Vocational training programs" }
  ];

  return (
    <div className="main-grid">
      {/* Left Column - 8 Cards Grid */}
      <div className="left-column">
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Rolling Notifications and Buttons */}
      <div className="right-column">
        {/* Login and Signup Buttons */}
       {/* <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </div> */}

        {/* Rolling Notification Panel */}
        <div className="notification-panel">
          <h3>Latest Updates</h3>
          <div className="rolling-notification-container">
            <div className="notification-list" style={{ transform: `translateY(-${scrollPosition}px)`, transition: 'transform 0.8s ease-in-out' }}>
              {longNotificationsList.map((notification, index) => (
                <div key={index} className="notification-item">
                  <p>{notification}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       {/* Connect Box */}
       {/*  <div className="connect-box">
          <h3>Connect with Shiksha</h3>
          <ul>
            <li><a href="#">Ask Doubts</a></li>
            <li><a href="#">Join Live Chat</a></li>
            <li><a href="#">Download App</a></li>
          </ul> */}
          {/* Social Media */}
        {/*   <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=61580053190184" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/shikshacom/" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.youtube.com/@Shikshacom-edu" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div> */}

        {/* Achievers Feed */}
       {/* <div className="achievers-feed">
          <h3>Top Achievers</h3>
          <div className="feed-item">
            <img src="/placeholder.jpg" alt="Achiever" />
            <p>Student A scored 95% in JEE</p>
          </div>
          <div className="feed-item">
            <img src="/placeholder.jpg" alt="Achiever" />
            <p>Student B topped the class</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainGrid;