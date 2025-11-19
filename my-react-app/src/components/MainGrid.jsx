import '../css/MainGrid.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import demoImage from '../assets/demo.png';
import studioImage from '../assets/studio.jpeg';
import teacherImage from '../assets/teacher.jpeg';
import meetImage from '../assets/meet.jpeg';
import mualpuiImage from '../assets/mualpui.jpeg';
import codeImage from '../assets/code.jpeg';

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
    { 
      title: "Demo", 
      description: "Experience the simulation of our e-learning program",
      image: demoImage,
      link: "/demo" // Internal route
    },
    { 
      title: "Our Studio", 
      description: "Where digital presentation takes place",
      image: studioImage,
      link: null
    },
    { 
      title: "Teacher Office", 
      description: "Lession are prepared here",
      image: teacherImage,
      link: null
    },
    { 
      title: "Company Location", 
      description: "Mualpui, Aizawl, Mizoram",
      image: mualpuiImage,
      link: null
    },
    { 
      title: "Meeting", 
      description: "web application progress meet",
      image: meetImage,
      link: null
    },
    { 
      title: "Code", 
      description: "Process of the development of the web application",
      image: codeImage,
      link: null
    }
  ];

  return (
    <div className="main-grid">
      {/* Left Column - 8 Cards Grid */}
      <div className="left-column">
        <div className="cards-grid">
          {cards.map((card, index) => {
            const cardContent = (
              <>
                <div className="card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="card-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </>
            );

            // If card has a link, wrap it in Link component
            if (card.link) {
              return (
                <Link to={card.link} key={index} className="card card-link">
                  {cardContent}
                </Link>
              );
            }

            // Otherwise, render as regular div
            return (
              <div key={index} className="card">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column - Rolling Notifications and Buttons */}
      <div className="right-column">
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
      </div>
    </div>
  );
};

export default MainGrid;