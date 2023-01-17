import React, { useState } from 'react';
import  "./login.css"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { WindowSharp } from '@mui/icons-material';
import axios from 'axios';
function ResetPassword() {

 


  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');


  const [submitted, setSubmitted] = useState(false);

    

  const  handleSubmit = async e => {

    const c = localStorage.getItem("UserType");
    
    if(c=="instractor"){
    
     
      axios.post('http://localhost:8000/instractor/ResetPassword', {
        id: Email,
        password: password,
        
       
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

          }
          else
          {
            localStorage.setItem('UserEmail',response.data.Email);
            localStorage.setItem('UserType',response.data.type);

          }

      })
      .catch((error) => {
         
        });
        window.location.href = '/InstructorLandingPage'
      }


      if(c=="User"){
    
     
        axios.post('http://localhost:8000/user/ResetPassword', {
          id: Email,
          password: password,
          
         
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
  
            }
            else
            {
              localStorage.setItem('UserEmail',response.data.Email);
              localStorage.setItem('UserType',response.data.type);
  
            }
  
        })
        .catch((error) => {
           
          });
          window.location.href = '/UserLandingPage'
        }
        
        if(c=="Corporateuser"){
    
     
          axios.post('http://localhost:8000/Coroporateuser/ResetPassword', {
            id: Email,
            password: password,
            
           
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
    
              }
              else
              {
                localStorage.setItem('UserEmail',response.data.Email);
                localStorage.setItem('UserType',response.data.type);
    
              }
    
          })
          .catch((error) => {
             
            });
            window.location.href = '/CorporateuserLandingPage'
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
        <h1>ResetPassword </h1>
      </div>
      {/* Calling to the methods */}
      <div className="messages">

       
      </div>

      <div className="form1">
      <label className="label">Email:</label>
      <input
        type="text"
        id="password-input"
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

      </li>
      <button id = "LOGIN" className="btn" type="submit" onClick={handleSubmit} variant="contained" color="primary"> LOGIN </button>

</div>
</div>

)};

export default ResetPassword;