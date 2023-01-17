import React, { useState } from 'react';
import './Contacts.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Contacts = () => {


  
  
 







  return (
   
    <><div className='navbar'>
      <div className='logo'>
        Online Courses
      </div>
      <nav className='item'>
        <ul className='ul'>
          <li>
            <Link to='/InstructorLandingPage'>Home</Link>
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



      </div>
      
      <div className="form1">
  <h1 className="text-center">Welcome to our website Contact Us Here</h1>
  <p>EMAIL : Support1@gmail.com</p>
  <p>Phonenumber : +49176664259555</p>

</div>
</>
  );
  
};

export default Contacts;