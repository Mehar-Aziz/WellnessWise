import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MessageDisplay from '../components/MessageDisplay';

const VerifyEmail = () => {
  const [message, setMessage] = useState('Verifying your email...');
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/verify/${token}`);
        const data = await response.json();
        setMessage(data.message);
        if (response.ok) {
          setTimeout(() => navigate('/login'), 3000);
        }
      } catch (error) {
        setMessage('An error occurred. Please try again.');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;