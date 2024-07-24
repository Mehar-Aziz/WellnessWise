import React, { useContext, useState } from 'react';
import './Registration.css';
import './Login.css'; 
import CreateProfileButton from './CreateProfileButton';
import { UserContext } from '../context/UserContext';

const Registration = () => {
 // const navigate = useNavigate();
 const { setUserData } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch("http://localhost:3000/api/users/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone,address, password}),
    });
    
    if (response.ok){
      const result = await response.json();
      localStorage.setItem('userId', result.userId);
      console.log('user registered succesfully')
     // Save user data to context
    setUserData(prevData => ({
      ...prevData,
      name,
      email,
      phone,
      address,
    }));
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPassword('');
    setShowModal(true);
  } else {
    console.error('Failed to register user');
  }
} catch (error) {
  console.error('Error during registration:', error)
}

  };

  const handleCloseModal = () => {
  setShowModal(false);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>CREATE ACCOUNT</span></div>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <i className="fas fa-person"></i>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fas fa-user"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fas fa-phone"></i>
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fas fa-home"></i>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="row">
  <label className="terms">
    <input type="checkbox" required  />
    I agree with<a href="/terms"> Terms and Conditions</a>. 
  </label>
</div>
<div className="row button">
            <input type="submit" value="CREATE" />
          </div>
          
        </form>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CreateProfileButton onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;

