import axios from 'axios';
import React, { useState } from 'react';
import  "./refundmoney.css"
import { Link } from 'react-router-dom';

function RefundMoney() {

  const [Money, setMoney] = useState('');
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
        <h1>refund successfully Added !!</h1>
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

   
      
     if(Email === '' || Money === '') {

     setError(true); 

      setSubmitted(false);
     


       }
    


    else {
    setSubmitted(true);
    setError(false);
    

    
     
    axios.post('http://localhost:8000/admin/refundmoney', {
     
      balance : Money,
      Email: Email,
      
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
      <label className="label">Email:</label>
      <input
        type="email"
        id="email"
        className="input"
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
      />

      
      <label className="label">Money:</label>
      <input
        type="text"
        id="password-input"
        className="input"
        value={Money}
        onChange={(event) => setMoney(event.target.value)}
        />
      

    
     
    

     
      <button id = "signup" className="btn" type="submit" onClick={handleSubmit}  variant="contained" color="primary">ADD ADMIN</button>
      
    
</div>
</div>

  );
}

export default RefundMoney;



