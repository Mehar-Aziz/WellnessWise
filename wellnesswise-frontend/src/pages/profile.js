import React from 'react';
import { useContext } from 'react';
import './Profile.css';
import userProfile from '../assets/Screenshot 2024-07-20 150438.png'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate()
  const { userData } = useContext(UserContext);

  const handleResources = (e) => {
    e.preventDefault();
    navigate('/resources');
  };
  const handleAdvice = () => {
    navigate('/advice')
  }
  return (
    <div className="user-profile">
      <h1>USER PROFILE</h1>
      <div className="profile-card">
        <img src={userProfile} alt="User avatar" className="avatar" />
        <h2>{userData.name}</h2>
        <p>{userData.education}</p>
        <p>{userData.address}</p>
        <div className="button-group">
          <button className="follow-btn" onClick={handleResources}>RESOURCES</button>
          <button className="message-btn" onClick={handleAdvice}>GET ADVICE
          </button>
        </div>
      </div>
      
      <div className="info-card">
        <h3>Full Name</h3>
        <p>{userData.name}</p>
        <h3>Gender</h3>
        <p>{userData.gender}</p>
        <h3>Email</h3>
        <p>{userData.email}</p>
        <h3>Phone</h3>
        <p>{userData.phone}</p>
        <h3>Date Of Birth</h3>
        <p>{userData.birth}</p>
        <h3>Address</h3>
        <p>{userData.address}</p>
      </div>
      
      <div className="progress-status">
      <h3>Hobbies</h3>
      <p>{userData.hobbies.join(', ')}</p>
      <h3>Goals</h3>
        <p>{userData.goals.join(', ')}</p>
        <h2>Project Status</h2>
        <div className="status-item">
          <span>{userData.goals[0]}</span>
          <div className="progress-bar">
            <div className="progress" style={{width: '80%'}}></div>
          </div>
        </div>
        <div className="status-item">
          <span>{userData.goals[1]}</span>
          <div className="progress-bar">
            <div className="progress" style={{width: '70%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;