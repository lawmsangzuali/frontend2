import './LowerGrid.css';

const LowerGrid = () => {
  return (
    <div className="lower-grid">
      {/* Shiksha Talks Banner */}
      <div className="shiksha-talks">
        <div className="talks-content">
          <h2>Career Councelling</h2>
          <p>Inspiring conversations on education, learning, and growth</p>
          <button className="talks-btn">Listen Now</button>
        </div>
        <div className="talks-image">
          <img src="/placeholder-teacher.jpg" alt="Teacher speaking" />
        </div>
      </div>

      {/* Digital India Banner */}
      <div className="digital-india">
        <div className="digital-content">
          <h2>Digital India Initiative</h2>
          <p>Bringing e-learning to every corner of the nation</p>
        </div>
        <div className="digital-image">
          <img src="/placeholder-digital.jpg" alt="Digital education" />
        </div>
      </div>
    </div>
  );
};

export default LowerGrid;
