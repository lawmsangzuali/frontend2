import React, { useState } from 'react';
import '../css/Courses.css';

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState('Class 8');
  const [selectedStream, setSelectedStream] = useState(null);

  const subjectsData = {
    'Class 8': ['Science', 'Social Science', 'Maths', 'English', 'GK', 'IT','MIL'],
    'Class 9': ['Science', 'Social Science', 'Maths', 'English', 'GK', 'MIL'],
    'Class 10': ['Science', 'Social Science', 'Maths', 'English', 'MIL'],
    'Class 11': {
      'Science': ['Physics', 'Chemistry', 'Biology', 'Maths', 'English'],
      'Arts': ['History', 'Geography', 'Political Science', 'Sociology', 'English', 'Hindi'],
      'Commerce': ['Accountancy', 'Business Studies', 'Economics', 'Maths', 'English']
    },
    'Class 12': {
      'Science': ['Physics', 'Chemistry', 'Biology', 'Maths', 'English'],
      'Arts': ['History', 'Geography', 'Political Science', 'Sociology', 'English', 'Hindi'],
      'Commerce': ['Accountancy', 'Business Studies', 'Economics', 'Maths', 'English']
    }
  };

  const handleClassClick = (className) => {
    setSelectedClass(className);
    setSelectedStream(null);
  };

  const handleStreamClick = (stream) => {
    setSelectedStream(stream);
  };

  const handleBackClick = () => {
    setSelectedStream(null);
  };

  const renderContent = () => {
    if (selectedStream) {
      // Show subjects for the selected stream
      return (
        <div className="courses-content-area">
          <h3>{selectedClass} - {selectedStream}</h3>
          <div className="courses-subjects-grid">
            {subjectsData[selectedClass][selectedStream].map((subject, index) => (
              <div className="courses-subject-card" key={index}>
                <h4>{subject}</h4>
              </div>
            ))}
          </div>
          <button className="courses-back-button" onClick={handleBackClick}>Back to Streams</button>
        </div>
      );
    } else if (!Array.isArray(subjectsData[selectedClass]) && typeof subjectsData[selectedClass] === 'object') {
      // Show streams for Class 11 or 12
      return (
        <div className="courses-content-area">
          <h3>{selectedClass}</h3>
          <div className="courses-streams-grid">
            {Object.keys(subjectsData[selectedClass]).map((stream, index) => (
              <div className="courses-stream-card" key={index} onClick={() => handleStreamClick(stream)}>
                <h4>{stream}</h4>
                <p>Click to view subjects</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      // Show subjects for Class 8-10
      return (
        <div className="courses-content-area">
          <h3>{selectedClass}</h3>
          <div className="courses-subjects-grid">
            {subjectsData[selectedClass].map((subject, index) => (
              <div className="courses-subject-card" key={index}>
                <h4>{subject}</h4>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="courses-container">
      <div className="courses-canvas">
        <h1 className="courses-title">Our Online Courses</h1>
        <p className="courses-subtitle">Explore subjects for classes 8 to 12, including specialized streams for classes 11 and 12.</p>

        <div className="courses-class-tabs">
          {Object.keys(subjectsData).map((className) => (
            <button
              key={className}
              className={`courses-class-tab ${selectedClass === className ? 'selected' : ''}`}
              onClick={() => handleClassClick(className)}
            >
              {className}
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default Courses;