import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    type:'',
  });

  const { username, password ,type } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate form data and log in user
  };

  return (
<form className="login-form" onSubmit={handleSubmit}>
  <label htmlFor="username" className="login-label">Username</label>
  <input
    type="text"
    name="username"
    value={username}
    onChange={handleChange}
    className="login-input"
  />
  <label htmlFor="password" className="login-label">Password</label>
  <input
    type="password"
    name="password"
    value={password}
    onChange={handleChange}
    className="login-input"
  />
 <div className="login-checkbox-group">
        <label htmlFor="instructor" className="login-label login-checkbox-label">
          <input
            type="checkbox"
            name="type"
            value="instructor"
            checked={type === 'instructor'}
            onChange={handleChange}
            className="login-checkbox"
          />
          Instructor
        </label>
        <label htmlFor="individual trainee" className="login-label login-checkbox-label">
          <input
            type="checkbox"
            name="type"
            value="individual trainee"
            checked={type === 'individual trainee'}
            onChange={handleChange}
            className="login-checkbox"
          />
          Individual Trainee
        </label>
      </div>

        if(type=='individual trainee'){
      <Link to="/individual">
        <button>Login ya individual</button>
      </Link>
        }else{
      <Link to="/ProfileInstructor">
        <button>Login ya instt</button>
      </Link>
        }
</form>
  );
}

export default Login;