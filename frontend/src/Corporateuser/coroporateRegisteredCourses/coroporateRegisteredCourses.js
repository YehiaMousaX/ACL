import React from 'react';
import "./coroporateRegisteredCourses.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-modal";

function CoroporateRegisteredCourses() {
  const [courses, setCourses] = useState([]);



 



  useEffect(() => {

    console.log(localStorage.getItem('UserEmail'))
    axios.post('http://localhost:8000/Coroporateuser/AllCourses/registerfor' , { Email:localStorage.getItem('UserEmail') })

    .then((res) => {
         setCourses(res.data)
    })
    .catch((err) => console.log(err));
  
      
      
  }, []);


  function courserate(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    return sum / arr.length;
  }



  return  (
    
    <><div className='navbar'>
          <div className='logo'>
              Online Courses
          </div>
          <nav className='item'>
              <ul className='ul'>
                  <li>
                      <Link to='/corporateuserLanding'>Home</Link>
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
              <button className="dropbtn">Corporate User
                  <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                  <Link to='/MyProfile'>My Profile</Link>
                  <Link to='/' >Logout</Link>
                  <Link to='/user/UserShowAllCourse'> All Courses</Link>


              </div>
          </div>

          </div><div className="Course-list">

<h1>ALL Courses : </h1>
{courses.map((course) => (
    <div className="Course">
        <h3>Courseid : {course.Courseid}</h3>
        <h3>title : {course.title}</h3>
        <h3>totalHours : {course.totalHours}</h3>
        <h3>price : {course.price}</h3>
        <h3>price after discount  : {course.price - (course.price * (course.discount / 100 ))}</h3>
        <h3>Subject : {course.Subject}</h3>
        <h3>Instractur Email : {course.instractorid}</h3>
        <h3>rate : {courserate(course.rate)}</h3>
        <h3>Number of Exercises : {course.excercises.length}</h3>

        {course.subtitles.map((sub) => (
                <div className="Coursee1">
                <h3>subtitle : {sub}  </h3>
                <h3>Link Youtube :  </h3>
                <a href={sub[1]} target="_blank" style={{color: 'blue'}}> {sub[1]}</a>
                 <h3>total hour : {sub[2]}  </h3>

                  </div>

               ))}
        <h3>preview video press here  :   <a href={course.preview} target="_blank" style={{color: 'blue'}}>  {course.preview}</a></h3>
       

        
         
        
    </div>
))}
</div></>
);
}

export default CoroporateRegisteredCourses;
