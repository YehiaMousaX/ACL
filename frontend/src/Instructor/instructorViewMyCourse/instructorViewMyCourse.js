import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useEffect } from 'react';
import "./instructorViewMyCourse.css";
import { get } from 'moongose/routes';
const InstructorCourses = () => {
  const [courses, setCourses] = useState([]);
  
 

  function courserate(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }

 

 
  const getCourses = () => {

  axios.get('http://localhost:8000/instractor/MyCourses/ratingandreviews',    
    {
    id: localStorage.getItem("UserEmail"),
  },
  {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }
      ).then(response => {
        setCourses( response.data );
      })
      .catch(error => {
        console.error(error);
  });
  };

  const Logout = (event) => {
    localStorage.clear();
 };

return  (
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
        <div className="dropdown">
            <button className="dropbtn">Instructor
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <Link to='/MyProfile'>My Profile</Link>
                <Link to='/' onClick={Logout()}>Logout</Link>
                <Link to='/instractor/UserShowAllCourse'> All Courses</Link>


            </div>
        </div>

    </div><div className="Course-list">

            <h1>My Courses : </h1>

                 <button
                 id="get"
                className="button"
                onClick={getCourses}
                variant="contained"
                color="primary">
                 get my Courses
      </button>
 
            {courses.map((course) => (
                <div className="Course">
                    <h3>Courseid : {course.Courseid}</h3>
                    <h3>title : {course.title}</h3>
                    <h3>totalHours : {course.totalHours}</h3>
                    <h3>price : {course.price}</h3>
                    <h3>rate : {courserate(course.rate)}</h3>


                </div>
            ))}
        </div></>
);

}

export default InstructorCourses;
