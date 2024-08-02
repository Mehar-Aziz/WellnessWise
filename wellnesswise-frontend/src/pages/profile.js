import React, { useState, useContext } from 'react';
import './Profile.css';
import userProfile from '../assets/Screenshot 2024-07-20 150438.png'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  const handleResources = (e) => {
    e.preventDefault();
    navigate('/resources');
  };

  const handleAdvice = () => {
    navigate('/advice')
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
    // Here you would typically make an API call to update the user data on the server
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleArrayChange = (e, index, field) => {
    const newArray = [...editedData[field]];
    newArray[index] = e.target.value;
    setEditedData(prevData => ({
      ...prevData,
      [field]: newArray
    }));
  };

  return (
    <div className="user-profile">
      <h1>USER PROFILE</h1>
      <div className="profile-card">
        <img src={userProfile} alt="User avatar" className="avatar" />
        <h2>{isEditing ? <input name="name" value={editedData.name} onChange={handleChange} /> : userData.name}</h2>
        <p>{isEditing ? <input name="education" value={editedData.education} onChange={handleChange} /> : userData.education}</p>
        <p>{isEditing ? <input name="address" value={editedData.address} onChange={handleChange} /> : userData.address}</p>
        <div className="button-group">
          <button className="follow-btn" onClick={handleResources}>RESOURCES</button>
          <button className="message-btn" onClick={handleAdvice}>GET ADVICE</button>
        </div>
      </div>
      
      <div className="info-card">
        <h3>Full Name</h3>
        <p>{isEditing ? <input name="name" value={editedData.name} onChange={handleChange} /> : userData.name}</p>
        <h3>Gender</h3>
        <p>{isEditing ? <input name="gender" value={editedData.gender} onChange={handleChange} /> : userData.gender}</p>
        <h3>Email</h3>
        <p>{isEditing ? <input name="email" value={editedData.email} onChange={handleChange} /> : userData.email}</p>
        <h3>Phone</h3>
        <p>{isEditing ? <input name="phone" value={editedData.phone} onChange={handleChange} /> : userData.phone}</p>
        <h3>Date Of Birth</h3>
        <p>{isEditing ? <input name="birth" value={editedData.birth} onChange={handleChange} /> : userData.birth}</p>
        <h3>Address</h3>
        <p>{isEditing ? <input name="address" value={editedData.address} onChange={handleChange} /> : userData.address}</p>
      </div>
      
      <div className="progress-status">
        <h3>Hobbies</h3>
        <p>
          {isEditing 
            ? editedData.hobbies.map((hobby, index) => (
                <input 
                  key={index} 
                  value={hobby} 
                  onChange={(e) => handleArrayChange(e, index, 'hobbies')} 
                />
              ))
            : userData.hobbies.join(', ')}
        </p>
        <h3>Goals</h3>
        <p>
          {isEditing 
            ? editedData.goals.map((goal, index) => (
                <input 
                  key={index} 
                  value={goal} 
                  onChange={(e) => handleArrayChange(e, index, 'goals')} 
                />
              ))
            : userData.goals.join(', ')}
        </p>
        <h2>Progress Status</h2>
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
      
      {isEditing 
        ? <button onClick={handleSave} className='editbtn'>Save</button>
        : <button onClick={handleEdit} className='editbtn'>Edit</button>
      }
    </div>
  );
};

export default Profile;