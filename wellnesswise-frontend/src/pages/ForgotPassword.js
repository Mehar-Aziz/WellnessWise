import React from 'react';
import PasswordResetForm from '../components/PasswordResetForm';
import MessageDisplay from '../components/MessageDisplay';
import './ForgotPassword.css'

const ForgotPasswordPage = () => {
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (email) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='forgotPage'>
      <h1>Forgot Password?</h1>
      <PasswordResetForm onSubmit={handleSubmit} />
      <MessageDisplay message={message} />
    </div>
  );
};

export default ForgotPasswordPage;