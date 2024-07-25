import React, { useState } from 'react';
import './Login.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
        console.log('Login successful!');
        navigate('/profile');
      
    // Reset form fields
    setEmailOrPhone('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>LOGIN</span></div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
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
          <div className="pass"><a href="#forgot">Forgot password?</a></div>
          <div className="row button">
            <input type="submit" value="SIGN IN" />
          </div>
          <div className="signup-link">Not a member? <Link to="/register" >Signup now</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Login;

