import React from 'react';
import './Profile.css';
import userProfile from '../assets/Screenshot 2024-07-20 150438.png'


const Profile = () => {
  return (
    <div className="user-profile">
      <h1>USER PROFILE</h1>
      <div className="profile-card">
        <img src={userProfile} alt="User avatar" className="avatar" />
        <h2>John Smith</h2>
        <p>Full Stack Developer</p>
        <p>Bay Area, San Francisco, CA</p>
        <div className="button-group">
          <button className="follow-btn">EDIT</button>
          <button className="message-btn">GET ADVICE
          </button>
        </div>
      </div>
      
      <div className="info-card">
        <h3>Full Name</h3>
        <p>Johnatan Smith</p>
        <h3>Email</h3>
        <p>example@example.com</p>
        <h3>Phone</h3>
        <p>(097) 234-5678</p>
        <h3>Mobile</h3>
        <p>(098) 765-4321</p>
        <h3>Address</h3>
        <p>Bay Area, San Francisco, CA</p>
      </div>
      
      <div className="progress-status">
        <h3>Project Status</h3>
        <div className="status-item">
          <span>Daily Walk</span>
          <div className="progress-bar">
            <div className="progress" style={{width: '80%'}}></div>
          </div>
        </div>
        <div className="status-item">
          <span>Yoga</span>
          <div className="progress-bar">
            <div className="progress" style={{width: '70%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;