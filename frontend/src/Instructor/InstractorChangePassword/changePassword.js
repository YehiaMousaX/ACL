import React, { useState } from 'react';
import axios from 'axios';
import './changePassword.css';

const ChangePassword = () => {
  const [password, setpassword] = useState('');
 
  const [message, setMessage] = useState('');
  const [Email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const c = localStorage.getItem("UserType");
    if(c=="instractor"){
    try { const response =  axios.post('http://localhost:8000/instractor/ChangePassword', {
      id: Email,
      password: password,
      });
      if (response.data.success) {
        setMessage('Password changed successfully');
      } else {setMessage(response.data.message);
      }
    } catch (error) {
      
    }
  }

  if(c=="User"){
    try { const response =  axios.post('http://localhost:8000/user/ChangePassword', {
      id: Email,
      password: password,
      });
      if (response.data.success) {
        setMessage('Password changed successfully');
      } else {setMessage(response.data.message);
      }
    } catch (error) {
      
    }
  }
  if(c=="Coroporateuser"){
    try { const response =  axios.post('http://localhost:8000/Coroporateuser/ChangePassword', {
      id: Email,
      password: password,
      });
      if (response.data.success) {
        setMessage('Password changed successfully');
      } else {setMessage(response.data.message);
      }
    } catch (error) {
      
    }
  }

  };

  return (
    <div className="form1">


    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>

      <input
        type="text"
        id="current-password"
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />
      <label htmlFor="new-password">New Password:</label>
      <input
        type="password"
        id="new-password"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
      />
      <br />
      <br />
      <button type="submit">Change Password</button>
      {message && <p>{message}</p>}

    </form>
    </div>
  );
};

export default ChangePassword;
