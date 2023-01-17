import React from 'react';
import "./coroporateuserRateCourse.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

function CoroporateRateCourse() {
  const [courses, setCourses] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios.post('http://localhost:8000/Coroporateuser/AllCourses/registerfor1' , { Email:localStorage.getItem('UserEmail') })

    .then((res) => {
         setCourses(res.data)
    })
    .catch((err) => console.log(err));
  }, []);

  function courserate(arr) {
    if (arr.length === 0) {
      return 0;
    }
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    console.log(sum)
    return sum / arr.length;
  }

  function handleSubmit(course) {
    if (rating <=5 && rating >=0) {
    axios.put('http://localhost:8000/Coroporateuser/ratecourse', { courseid: course.Courseid , rate:  parseInt(rating) ,Email:localStorage.getItem('UserEmail') })
      .then((response) => {
      })
      .catch((error) => {
        console.error(error);
      });
  }
  window.location.href = '/UserLandingPage'

  }
  return  (
 <><div className='navbar'>
      <div className='logo'>
        Online Courses
      </div>
      <nav className='item'>
        <ul className='ul'>
          <li>
            <Link to='/UserLandingPage'>Home</Link>
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
        <button className="dropbtn">User
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to='/MyProfile'>My Profile</Link>
          <Link to='/'>Logout</Link>
          <Link to='/user/UserShowAllCourse'> All Courses</Link>


        </div>
      </div>

    </div><div className="Course-list">
        <h1>ALL Courses : </h1>
        {courses.map((course) => (
          <div className="Course">
            <h3>Courseid : {course.Courseid}</h3>
            <h3>Subject : {course.Subject}</h3>
            <h3>title : {course.title}</h3>
            <h3>totalHours : {course.totalHours}</h3>
            <h3>subtitles :</h3>
            {course.subtitles.map((sub) => (
              <div className="Coursee">
                <h3>subtitle : {sub[0]}  </h3>
                <h3>LinkYoutube : {sub[1]}  </h3>
                <h3>hour : {sub[2]}  </h3>

              </div>

            ))}
            <h3>discount : {course.discount}</h3>
            <h3>shortsummary : {course.shortsummary}</h3>
            <h3>review : {course.review}</h3>
            <h3>preview : {course.preview}</h3>

            <h3>rate : {courserate(course.rate)}</h3>

            <h3>
              <form>
                <label>
                  Rating:
                  <input
                    type="number"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                    min="0"
                    max="5" />
                </label>

                <button type="submit" onClick={() => handleSubmit(course)}>ADD RATE</button>
              </form>
            </h3>
          </div>
        ))}
      </div></>
  );
}

export default CoroporateRateCourse;
