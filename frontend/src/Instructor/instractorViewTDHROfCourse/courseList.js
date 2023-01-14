import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/courses');
      setCourses(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course">
          <h3 className="course-title">{course.title}</h3>
          <div className="course-details">
            <div className="course-hours">Hours: {course.hours}</div>
            <div className="course-rate">Rate: ${course.rate}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;