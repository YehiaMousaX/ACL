import React from 'react';
import "./coroporateuserRateInstractor.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

function CoroporateRateInstructor() {
  const [instructors, setinstructors] = useState([]);
  const [rating, setRating] = useState('');

  useEffect(() => {
    axios.post('http://localhost:8000/Coroporateuser/getallinstractors', {Email :localStorage.getItem("UserEmail")})
      .then((res) => {
        setinstructors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function instractorrate(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    return sum / arr.length;
  }

  function handleSubmit(instructor) {
    axios.put('http://localhost:8000/Coroporateuser/rateinstractor', { Email: instructor.Email, rate: rating , Emailuser : localStorage.getItem("UserEmail") })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <><div className='navbar'>
    <div className='logo'>
      Online Courses
    </div>
    <nav className='item'>
      <ul className='ul'>
        <li>
          <Link to='/corporateuserLandingPage'>Home</Link>
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

  </div>

    <div className="instructor-list">
      <h1>ALL INSTRACTORS : </h1>
      {instructors.map((instructor) => (
        <div className="instructor">
          <h3>Name : {instructor.Name}</h3>
          <h3>Email : {instructor.Email}</h3>
          <h3>rate : {instractorrate(instructor.rate)}</h3>

          <h3>
            <form>
              <label>
                Rating:
                <input
                  type="number"
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  min="0"
                  max="5"
                />
              </label>
              {/* Pass the instructor object to the handleSubmit function */}
              <button type="submit" onClick={() => handleSubmit(instructor)}>ADD RATE</button>
            </form>
          </h3>
        </div>
      ))}
      </div></>
  );
}

export default CoroporateRateInstructor;
