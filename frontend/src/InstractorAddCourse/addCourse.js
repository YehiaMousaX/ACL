import React, { useState } from 'react';
import './addCourse.css';

const AddCourseForm = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to submit the form data to your backend or API
  };

  return (
    <form className="add-course-form" onSubmit={handleSubmit}>
      <h2>Add a New Course</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="subtitle">Subtitle:</label>
      <input
        type="text"
        id="subtitle"
        value={subtitle}
        onChange={(event) => setSubtitle(event.target.value)}
      />
      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourseForm;