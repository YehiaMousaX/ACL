import React from 'react';
import "./adminviewreportedproblems.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-modal";

function Adminrviewproblem() {
  const [problems, setproblems] = useState([]);







  function handleSubmit(x) {
    axios.post('http://localhost:8000/admin/maketheproblemresolved' ,{ userEmail: x.userEmail, courseId : x.courseId, typeoftheProblem :x.typeoftheProblem, status : x.status})
    .then((res) => {
      setproblems(res.data);
  
    })
    .catch((err) => console.log(err));
  
  }
  function handleSubmit1(x) {
    axios.post('http://localhost:8000/admin/maketheproblempending' ,{ userEmail: x.userEmail, courseId : x.courseId, typeoftheProblem :x.typeoftheProblem, status : x.status})
    .then((res) => {
      setproblems(res.data);
  
    })
    .catch((err) => console.log(err));
  
  }


  useEffect(() => {

  
    
    axios.post('http://localhost:8000/admin/reportedproblems')
      .then((res) => {
        setproblems(res.data);

      })
      .catch((err) => console.log(err));
      
    
  }, [handleSubmit,handleSubmit1]);




  return  (
    
    <><div className='navbar'>
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
          

          <div className="dropdown">
              <button className="dropbtn">Admin
                  <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                  <Link to='/MyProfile'>My Profile</Link>
                  <Link to='/' >Logout</Link>
                  <Link to='/user/UserShowAllCourse'> All Courses</Link>


              </div>
          </div>

          </div><div className="Course-list">

<h1>Reported Problems : </h1>
{problems.map((course) => (
    <div className="Course">
        <h3>user Email  : {course.userEmail}</h3>
        <h3>course Id  : {course.courseId}</h3>
        <h3>type of the User  : {course.typeoftheUser}</h3>
        <h3>type of the Problem  : {course.typeoftheProblem}</h3>
        <h3>description  : {course.description}</h3>
        <h3>status  : {course.status}</h3>

       
        <div class="button-container">

    
          <button id = "register" className='btn1' type="submit" variant="contained" color="primary"onClick={() => handleSubmit(course)} > mark the problem as resolved</button>
          <button id = "register" className='btn1' type="submit" variant="contained" color="primary" onClick={() => handleSubmit1(course)}> mark the problem as pending </button>

                

                 </div>
        
         
        
    </div>
))}
</div></>
);
}

export default Adminrviewproblem;
