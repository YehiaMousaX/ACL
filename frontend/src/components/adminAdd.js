import React, { useState } from 'react';
import './adminAdd.css';

function AdminAdd() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isCooperativeTrainee, setIsCooperativeTrainee] = useState(false);

 
  const handleAdminChange = () => {
    setIsAdmin(true);
    setIsInstructor(false);
    setIsCooperativeTrainee(false);
  };

  const handleInstructorChange = () => {
    setIsAdmin(false);
    setIsInstructor(true);
    setIsCooperativeTrainee(false);
  };

  const handleCooperativeTraineeChange = () => {
    setIsAdmin(false);
    setIsInstructor(false);
    setIsCooperativeTrainee(true);
  };



  const  handleSubmit = e => {



  }
  return (
    <form className="admin-form">
      <label className="label">Name:</label>
      <input
        type="text"
        id="name"
        className="input"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label className="label">Password:</label>
      <input
        type="password"
        id="password-input"
        className="input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      <br />
      <label className="label1">
        Is admin:
        <input
          type="checkbox"
          id="is-admin"
          checked={isAdmin}
          onChange={handleAdminChange}
        />
      </label>
      <label className="label1">
        Is Instructor:
        <input
          type="checkbox"
          id="isInstructor"
          checked={isInstructor}
          onChange={handleInstructorChange}
        />
      </label>
      <label className="label1">
        Is CooperativeTrainee:
        <input
          type="checkbox"
          id="isCooperativeTrainee"
          checked={isCooperativeTrainee}
          onChange={handleCooperativeTraineeChange}
        />
      </label>
      <br />
      <button type="submit" onClick= {handleSubmit}> Add </button>
    </form>
  );
}

export default AdminAdd;