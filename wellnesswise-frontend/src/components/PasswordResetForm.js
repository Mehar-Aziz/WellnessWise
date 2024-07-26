import React from 'react';
import './PasswordResetForm.css'; 

const PasswordResetForm = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form className='forgot-password-form' onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button className='reset-btn' type="submit">Reset Password</button>
    </form>
  );
};

export default PasswordResetForm;