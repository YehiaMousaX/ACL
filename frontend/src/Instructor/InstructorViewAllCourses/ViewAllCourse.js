import React from 'react';
import "./ViewAllCourse.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

function ViewAllCourse() {
  const [courses, setCourses] = useState([]);
  
  const Logout = (event) => {
    localStorage.clear();
 };

  useEffect(() => {
    axios.get('http://localhost:8000/user/AllCourses')
      .then((res) => {
        setCourses(res.data);
        console.log(res.data)

      })
      .catch((err) => console.log(err));
  }, []);

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

              <h1>ALL Courses : </h1>
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
export default ViewAllCourse;
