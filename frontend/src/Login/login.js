
import React, { useState } from 'react';
import  "./login.css"
import { Link } from 'react-router-dom';


function Loginform() {

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
    
    
  

  
    else {

    
    const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          Email: Email,
        }),
      })

      const data = await response.json()
     if (data.user!== false) {
        window.location.href = '/users'
    }
     else {
        alert ('please check your user name and password')
     }
    
    
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
     


      <button id = "LOGIN" className="btn" type="submit" onClick={handleSubmit} variant="contained" color="primary"> LOGIN </button>
</div>
</div>

  );
}
export default Loginform;



