import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstructorCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const res = await axios.get('/api/instructor/courses');
      setCourses(res.data);
    }
    fetchCourses();
  }, []);

  return (
    <div className="instructor-courses">
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
