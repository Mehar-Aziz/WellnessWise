import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import './Login.css'; 

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
    console.log('Email/Phone:', email);
    console.log('Password:', password);
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPassword('');

    //Navigate to login
    navigate('/login');

  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>Registration Form</span></div>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <i className="fas fa-user"></i>
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
            <i className="fas fa-user"></i>
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fas fa-user"></i>
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
            <input type="submit" value="Register" />
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Registration;

