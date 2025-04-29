import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const date = new Date();
  const currentTime = date.getHours();

  const greeting = (() => {
    return currentTime >= 4 && currentTime < 12
      ? 'Morning'
      : currentTime >= 12 && currentTime < 17
      ? 'Afternoon'
      : currentTime >= 17 && currentTime < 21
      ? 'Evening'
      : 'Night';
  })();

  return (
    <div className="dashboard-container">
      {/* Greeting Section */}
      <div className="greeting">
        <h1>Hello Employee,</h1>
        <p>Good {greeting}</p>
      </div>

      {/* Stat Cards */}
      <div className="stat-cards">
        <div className="stat-card">
          <h2>20/20</h2>
          <p>Total Employees</p>
        </div>
        <div className="stat-card">
          <h2>3/20</h2>
          <p>On Leave</p>
        </div>
        <div className="stat-card">
          <h2>1/20</h2>
          <p>New Joinee</p>
        </div>
        <div className="stat-card">
          <h2>11</h2>
          <p>Projects</p>
        </div>
      </div>

      {/* Attendance Overview */}
      <div className="attendance-overview">
        <h3>Leave Overview</h3>
        <div className="attendance-chart">[Chart Placeholder]</div>
      </div>

      {/* News & Events */}
      <div className="news-events">
        <div className="news-card">
          <h4>News & Events</h4>
          <p>18 FEB: Board meeting</p>
          <p>15 FEB: Team meeting</p>
          <p>10 FEB: Updated company policy</p>
        </div>
        <div className="news-card">
          <h4>Upcoming Interviews</h4>
          <p>Today: Guy Hawkins (10:00 - 11:00)</p>
          <p>Tomorrow: Robert Fox (13:00 - 14:00)</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
