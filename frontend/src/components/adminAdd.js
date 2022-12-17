import React, { useState } from 'react';
import './adminAdd.css';

function AdminAdd() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isCooperativeTrainee, setIsCooperativeTrainee] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the code to save the admin user to your database or backend
    console.log(`Username: ${username}, Password: ${password}, Is admin: ${isAdmin},isInstructor: ${isInstructor} , isCooperativeTrainee : ${isCooperativeTrainee}`);
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <label htmlFor="is-admin">
        Is admin:
        <input
          type="checkbox"
          id="is-admin"
          checked={isAdmin}
          onChange={(event) => setIsAdmin(event.target.checked)}
        />
      </label>
      <label htmlFor="isInstructor">
        Is Instructor:
        <input
          type="checkbox"
          id="isInstructor"
          checked={isInstructor}
          onChange={(event) => setIsInstructor(event.target.checked)}
        />
      </label>
      <label htmlFor="isCooperativeTrainee">
        Is CooperativeTrainee:
        <input
          type="checkbox"
          id="isCooperativeTrainee"
          checked={isCooperativeTrainee}
          onChange={(event) => setIsCooperativeTrainee(event.target.checked)}
        />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AdminAdd;