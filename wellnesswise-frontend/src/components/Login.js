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
    setError('');
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrPhone,
          password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
      }

      console.log('Login successful!');
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      navigate('/profile');
    } catch (error) {
      setError(error.message);
    }

    // Reset form fields
    setEmailOrPhone('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>LOGIN</span></div>
        <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
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

