import React, { useState } from 'react';
import  "./login.css"
import { Link } from 'react-router-dom';

import axios from 'axios';

function ForgetPassword() {

 
    const [Email, setEmail] = useState('');
  
  
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [error1, setError1] = useState(false);
  
    
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          <h1>User {} successfully registered!!</h1>
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
  
    const errorMessage1 = () => {
      return (
        <div
          className="error"
          style={{
            display: error1 ? '' : 'none',
          }}>
          <h1>* invalid email or password *</h1>
        
        
      </div>
      );
    };
  
  
   
    const  handleSubmit = async e => {
  
     
    
  
      if ( Email === '' ) {
        setError(true); 
        setSubmitted(false);
        setError1(false)
  
  
  
      }
  
      else  {
       
        axios.post('http://localhost:8000/instractor/FindEmail', {

          Email: Email
         
      } ,{
              headers: {
              'Content-Type': "application/json",
              'Accept': "application/json",
              } 
        } )
        .then((response) => {
          // console.log (response.data);
  
            if(response.data==="")
            {
              setError(false)
             setError1(true);
            }
            else
            {
              localStorage.setItem('UserEmail',response.data.Email);
               

            }
  
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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Contacts'>Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
        <div>
          <h1>Forget Password</h1>
        </div>
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {errorMessage1()}
          {successMessage()}
         
        </div>
  
        <div className="form1">
  
  
        <label className="label">Email:</label>
        <input
          type="email"
          id="email"
          className="input"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
        />

       <div>
       
      </div>
       
      <button onClick={handleSubmit}>Submit</button>

  
  </div>
  </div>
  
    );
  }
  export default ForgetPassword;