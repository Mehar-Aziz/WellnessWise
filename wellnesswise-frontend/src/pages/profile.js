import React from 'react';
import { useContext } from 'react';
import './Profile.css';
import userProfile from '../assets/Screenshot 2024-07-20 150438.png'
import { UserContext } from '../context/UserContext';


const Profile = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="user-profile">
      <h1>USER PROFILE</h1>
      <div className="profile-card">
        <img src={userProfile} alt="User avatar" className="avatar" />
        <h2>{userData.name}</h2>
        <p>Full Stack Developer</p>
        <p>{userData.address}</p>
        <div className="button-group">
          <button className="follow-btn">EDIT</button>
          <button className="message-btn">GET ADVICE
          </button>
        </div>
      </div>
      
      <div className="info-card">
        <h3>Full Name</h3>
        <p>{userData.name}</p>
        <h3>Email</h3>
        <p>{userData.email}</p>
        <h3>Phone</h3>
        <p>{userData.phone}</p>
        <h3>Address</h3>
        <p>{userData.address}</p>
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