import React, { useState } from 'react';
import axios from 'axios';
import './resetPassword.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
       setMessage('New passwords do not match');
       return;
    }
    try {
      const response = await axios.post('http://localhost:8000/Instractor/:instructorId/reset-password', {
        newPassword,});


      if (response.data.success) {
        setMessage('Password changed successfully');
      } else { setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-password">New Password:</label>
      <input
        type="password"
        id="new-password"
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <br />

      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <br />
      
      <button type="submit">Reset Password</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ResetPassword;
