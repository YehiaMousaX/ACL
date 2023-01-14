
import React, { useState } from 'react';
import  "./login.css"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { WindowSharp } from '@mui/icons-material';
import axios from 'axios';
function Loginform() {

 
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };


  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');


  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  
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



 
  const  handleSubmit = async e => {

   
  

    if ( Email === '' || password === '' ) {
      setError(true); 
      setSubmitted(false);
      



    }
    
    
  

  
    else  {
     
      axios.post('http://localhost:8000/user/login', {
        Password: password,
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
              console.log('Wrong Email or password')
          }
          else
          {
            localStorage.setItem('UserEmail',response.data.Email);
            localStorage.setItem('UserType',response.data.type);
            if (response.data.type=== "instractor") {
              window.location.href = '/InstructorLandingPage'

            }
            if (response.data.type=== "admin") 
            {
              window.location.href = '/AdminLandingPage'

            }
            if (response.data.type=== "user") 
            {
              window.location.href = '/UserLandingPage'

            }
            if (response.data.type=== "coroporateuser") 
            {
                
            }
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
        <h1>User Login </h1>
      </div>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
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


      <label className="label">Password:</label>
      <input
        type="password"
        id="password-input"
        className="input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
     
     <div>
     
    </div>
     
      <li>
        <Link to = '/signup'> Donot have an account ? Register here .</Link>
      </li>
      <button id = "LOGIN" className="btn" type="submit" onClick={handleSubmit} variant="contained" color="primary"> LOGIN </button>

</div>
</div>

  );
}
export default Loginform;



