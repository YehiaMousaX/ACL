import React from 'react';
import './courseOutline.css';

const CourseOutline = ({ title, price, totalHours, previewVideoUrl }) => {
  return (
    <div className="course-outline">
      <h2 className="course-outline__title">{title}</h2>
      <div className="course-outline__details">
        <span className="course-outline__price">${price}</span>
        <span className="course-outline__total-hours">{totalHours} hours</span>
      </div>
      <div className="course-outline__preview">
        <h3>Preview Video:</h3>
        <video src={previewVideoUrl} controls />
      </div>
    </div>
  );
};

export default CourseOutline;
