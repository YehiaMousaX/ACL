import axios from 'axios';
import React, { useState } from 'react';
import  "./adminAddinst.css"
import { Link } from 'react-router-dom';
import Modal from "react-modal";

function AdminAddinstr() {

  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');

  const [Name, setName] = useState('');

  const [submitted, setSubmitted] = useState(false);
  

  const [error, setError] = useState(false);

  
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>Instructor successfully registered!!</h1>
      </div>
    );
  };


  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>* Please enter all the fields*</h1>
      
      
    </div>
    );
  };





  

 


 
  const  handleSubmit = e => {

   
      
     if(Email === '' || password === '' || Name ==='') {

     setError(true); 

      setSubmitted(false);
     


       }
    


    else {
    setSubmitted(true);
    setError(false);
    

    
     
    axios.put('http://localhost:8000/admin/AddInstractor', {
     
      Password : password,
      Email: Email,
      Name:Name ,
      
  } ,{
          headers: {
          'Content-Type': "application/json",
          'Accept': "application/json",
          } 
    } )
    .then((response) => {

    })
    .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    
  }
  }
  

  return (
    <div className="form">
<div className='navbar'>
      <div className='logo'>
        Online Courses
      </div>
      <nav className='item'>
        <ul className='ul'>
          <li>
            <Link to='/AdminLandingPage'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Contacts'>Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>      <div>
      
      </div>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <div className="admin-form">

      <label className="label">Name:</label>
      <input
        type="email"
        id="email"
        className="input"
        value={Name}
        onChange={(event) => setName(event.target.value)}
      />



      <label className="label">Email:</label>
      <input
        type="email"
        id="email"
        className="input"
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
      />

      
      <label className="label">Password:</label>
      <input
        type="password"
        id="password-input"
        className="input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      

    
     
    

     
      <button id = "signup" className="btn" type="submit" onClick={handleSubmit}  variant="contained" color="primary">ADD Instructor</button>
      
    
</div>
</div>

  );
}

export default AdminAddinstr;



