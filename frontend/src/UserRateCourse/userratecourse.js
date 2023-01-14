import React from 'react';
import "./userratecourse.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';

function UserRateCourse() {
  const [courses, setCourses] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios.post('http://localhost:8000/instractor/getallcourses')
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

  function handleSubmit(course) {
    if (rating <=5 && rating >=0) {
    axios.put('http://localhost:8000/user/ratecourse', { courseid: course.Courseid , rate:  rating })
      .then((response) => {
      })
      .catch((error) => {
        console.error(error);
      });
  }
  }
  return  (
    <div className="Course-list">
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
          <h3>Brief : {sub[2]}  </h3>

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
                  max="5"
                />
              </label>
              
              <button type="submit" onClick={() => handleSubmit(course)}>ADD RATE</button>
            </form>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default UserRateCourse;
