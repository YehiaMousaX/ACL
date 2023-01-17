import React, { useState } from 'react';
import './addCourse.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const AddCourseForm = () => {
  const [courseid, setCourseid] = useState('');
  const [subject, setSubject] = useState('');
  const [price, setPrice] = useState('');
  const [summary, setSummary] = useState('');
  const [title, setTitle] = useState('');
  const [totalHours, settotalHours] = useState('');
  const [discount, setdiscount] = useState('');
  const [discount1, setdiscount1] = useState('');
  const [preview, setpreview] = useState('');
  const [titlename, settitlename] = useState('');
  const [link, setlink] = useState('');
  const [hour, sethour] = useState('');
  const [instractorid, setinstractorid] = useState('');
  const [review, setreview] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const instractorEmail =  " "+ localStorage.getItem('UserEmail') ;

  
  
  const handleSubmit = e => {
   
 

    if (courseid === '' || subject === '' || price === '' || summary === ''|| title === ''|| totalHours === ''||  review === '') {

       setError(true);

    }
   

    else {
      setError1(false);
      setError(false);
      setSubmitted(true)
      
      axios.post('http://localhost:8000/instractor/AddCourse', {
      Courseid: courseid,
      title : title,
      totalHours: totalHours,
      price: price,
      shortsummary: summary,
      Subject: subject,
      instractorid: instractorEmail,
      review: review,
      titlename: titlename ,
      link : link ,
      hour : hour ,
      preview : preview ,
      discount : discount ,
      discountdeadline : discount1

  } ,{
          headers: {
          'Content-Type': "application/json",
          'Accept': "application/json",
          } 
    } )
    .then((response) => {

    })
    .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }
  }


  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>Course  successfully Added!!</h1>
      </div>
    );
  };


  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>* Please enter all the fields*</h1>
      
      
    </div>
    );
  };


  const errorMessage1 = () => {
    return (
      <div
        className="error"
        style={{
          display: error1 ? '' : 'none',
        }}>
        <h1>*  you must sign in first *</h1>
      
      
    </div>
    );
  };


  return (
   
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
    </div>
    <div>


    <div className="messages">
        {errorMessage()}
        {errorMessage1()}
        {successMessage()}
       
      </div>
      </div><div className="form1">

        <label className="label">courseid:</label>
        <input
          type="text"
          id="name"
          className="input"
          value={courseid}
          onChange={(event) => setCourseid(event.target.value)} />
        <label className="label">title:</label>
        <input
          type="text"
          id="name"
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
        <label className="label">subject:</label>
        <input
          type="text"
          id="name"
          className="input"
          value={subject}
          onChange={(event) => setSubject(event.target.value)} />
        <label className="label">summary:</label>
        <input
          type="text"
          id="name"
          className="input"
          value={summary}
          onChange={(event) => setSummary(event.target.value)} />
        <label className="label">review:</label>
        <input
          type="text"
          id="name"
          className="input"
          value={review}
          onChange={(event) => setreview(event.target.value)} />
        <label className="label">totalHours:</label>
        <input
          type="number"
          id="name"
          className="input"
          value={totalHours}
          onChange={(event) => settotalHours(event.target.value)} />
        <label className="label">price:</label>
        <input
          type="number"
          id="name"
          className="input"
          value={price}
          onChange={(event) => setPrice(event.target.value)} />
          <label className="label">preview link :</label>
        <input
          type="text"
          id="name"
          className="input"
          value={preview}
          onChange={(event) => setpreview(event.target.value)} />
          <label className="label">discount number :</label>
        <input
          type="String"
          id="name"
          className="input"
          value={discount}
          onChange={(event) => setdiscount(event.target.value)} />
          <label className="label">discount deadline:</label>
        <input
          type="date"
          id="name"
          className="input"
          value={discount1}
          onChange={(event) => setdiscount1(event.target.value)} />
          <label className="label">tiltle name:</label>
        <input
          type="text"
          id="name"
          className="input"
          value={titlename}
          onChange={(event) => settitlename(event.target.value)} />
          <label className="label">link youtube:</label>
        <input
          type="text"
          id="name"
          className="input"
          value={link}
          onChange={(event) => setlink(event.target.value)} />
          <label className="label">hours :</label>
        <input
          type="text"
          id="name"
          className="input"
          value={hour}
          onChange={(event) => sethour(event.target.value)} />

        <button className='btn' type="submit" onClick={handleSubmit}>Add Course</button>
      </div></>
  );
  
};

export default AddCourseForm;