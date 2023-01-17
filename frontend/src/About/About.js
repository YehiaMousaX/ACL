import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const About = () => {


  
  
 







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
  <h1 className="text-center">About Us</h1>
  <p>Welcome to our website, where we offer a variety of online courses on the MERN stack. Our team of experienced developers and instructors have come together to create a platform for anyone looking to learn or improve their skills in MongoDB, Express.js, React.js, and Node.js.</p>
  <p>Our courses are designed for both beginners and advanced users, with a focus on practical, hands-on learning. We believe that the best way to learn is by doing, so our courses include a mix of video lectures, quizzes, and coding exercises to help you solidify your understanding of the material.</p>
  <p>In addition to our courses, we also offer a community forum where students can connect with each other, ask and answer questions, and share resources. We believe that learning should be a collaborative process, and we're committed to providing a supportive environment for our students.</p>
  <p>Thank you for considering our website for your learning journey. We look forward to helping you achieve your goals and advance your career in web development.</p>
</div>
</>
  );
  
};

export default About;