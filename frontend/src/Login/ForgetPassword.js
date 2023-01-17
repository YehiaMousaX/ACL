import React, { useState } from 'react';
import  "./login.css"
import { Link } from 'react-router-dom';

import axios from 'axios';

function ForgetPassword() {

 
    const [Email, setEmail] = useState('');
  
  
  
   
    const  handleSubmit = async e => {
  
     
    
  
  
    
       
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
                console.log("404")
            }
            else
            {
              localStorage.setItem('UserEmail',response.data.Email);
            }
  
        })
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