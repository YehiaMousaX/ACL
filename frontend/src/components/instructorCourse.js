import React, { useState } from 'react';
import axios from 'axios';


const InstructorCourses = () => {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState([]);

 
  const  handleSubmit = e => {
  axios.get('http://localhost:8000/instractor/MyCourses/ratingandreviews', { instractorid: "639631378ff4438d6677a4b3" })
      .then(response => {
        setCourses( response.data );
        setName(response.data)
 
 
  const  handleSubmit = e => {

  axios.get('http://localhost:8000/instractor/MyCourses/ratingandreviews', { instractorid: "639631378ff4438d6677a4b3" })
      .then(response => {
        setCourses( response.data );
      })
      .catch(error => {
        console.error(error);
  });
}

  return (

    <div className="form">
    <div>
      <h1>User </h1>
      <button id = "sumbit" className="btn" type="submit" onClick={handleSubmit} variant="contained" color="primary">Sign up</button>
    </div>
    <label className="label">Name:</label>
      <input
        type="text"
        id="name"
        className="input"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {courses.map(course => (
        <div key={course.Courseid}>
          <h3>{course.title}</h3>
          {course.rate.map(rate => (
            <p key={rate.id}>{rate.rating} stars</p>
          ))}
          {course.review.map(review => (
            <p key={review.id}>{review.comment}</p>
          ))}
          
        </div>
      ))}
    </div>
  );
};

export default InstructorCourses;
