import React from 'react';
import "./userrateinstractor.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';

function UserRateInstructor() {
  const [instructors, setinstructors] = useState([]);
  const [rating, setRating] = useState('');

  useEffect(() => {
    axios.post('http://localhost:8000/instractor/getallinstractors')
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
      sum += arr[i];
    }
    return sum / arr.length;
  }

  function handleSubmit(instructor) {
    axios.put('http://localhost:8000/user/rateinstractor', { instractorid: instructor._id, rate: rating })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="instructor-list">
      <h1>ALL INSTRACTORS : </h1>
      {instructors.map((instructor) => (
        <div className="instructor">
          <h3>Name : {instructor.Name}</h3>
          <h3>Age : {instructor.Age}</h3>
          <h3>Country : {instructor.Country}</h3>
          <h3>Email : {instructor.Email}</h3>
          <h3>rate : {instractorrate(instructor.rate)}</h3>

          <h3>My Biography : {instructor.Biography}</h3>
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
    </div>
  );
}

export default UserRateInstructor;
