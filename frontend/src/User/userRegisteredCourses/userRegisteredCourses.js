import React from 'react';
import "./userRegisteredCourses.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-modal";

function UserRegisteredCourses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);


  const handleSubmit5 = async (courseID,videoID)  => {
    try {
      const email = localStorage.getItem('UserEmail');
      const res = await axios.post('http://localhost:8000/user/watch', { Email: email, Courseid: courseID,id:videoID });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    } 
  
    window.location.href = '/user/WatchVideo'
  }

  const email = "" + localStorage.getItem('UserEmail');

  const handleReceiveCertificate = async (courseId) => {
    try {
      const email = localStorage.getItem('UserEmail');
      const res = await axios.post('http://localhost:8000/user/receiveCertificate', { Email: email, Courseid: courseId });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  }


  const getProgress = async (courseId) => {
    try {
      const email = localStorage.getItem('UserEmail');
      const res = await axios.post('http://localhost:8000/user/progress', { Email: email, Courseid: courseId });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  }



  const Refund = async (courseId) => {
    try {
      const email = localStorage.getItem('UserEmail');
      const res = await axios.put('http://localhost:8000/user/request-refund', { Email: email, Courseid: courseId });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  

  const handleDownloadCertificate = async (courseId) => {
    try {
      const email = localStorage.getItem('UserEmail');
      const res = await axios.post('http://localhost:8000/user/downloadCertificate', { Email: email, Courseid: courseId }, {responseType: 'blob'});
      const pdfBlob = new Blob([res.data], {type: 'application/pdf'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(pdfBlob);
      link.download = "certificate.pdf";
      link.click();
    } catch (err) {
      alert(err.response.data.error);
    }
  }
  
  

  function handleSubmit(x) {
    localStorage.setItem("usercourseID", x+"");  
  
   window.location.href = '/user/UseropenExamCourses'
  
  }
  function checkFunction(x) {
    if (x ===0){
      return false ;
    }
  else {
    return true ;
  }
  }

  useEffect(() => {

    console.log(localStorage.getItem('UserEmail'))
    axios.post('http://localhost:8000/user/AllCourses/registerfor' , { Email:localStorage.getItem('UserEmail') })

    .then((res) => {
         setCourses(res.data)
    })
    .catch((err) => console.log(err));
    
      
      
  }, []);


  function courserate(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    return sum / arr.length;
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
                  <Link to='/' >Logout</Link>
                  <Link to='/user/UserShowAllCourse'> All Courses</Link>


              </div>
          </div>

          </div><div className="Course-list">

<h1>ALL Courses : </h1>
{courses.map((course) => (
    <div className="Course">
        <h3>Courseid : {course.Courseid}</h3>
        <h3>title : {course.title}</h3>
        <h3>totalHours : {course.totalHours}</h3>
        <h3>price : {course.price}</h3>
        <h3>price after discount  : {course.price - (course.price * (course.discount / 100 ))}</h3>
        <h3>Subject : {course.Subject}</h3>
        <h3>Instractur Email : {course.instractorid}</h3>
        <h3>rate : {courserate(course.rate)}</h3>
        <h3>Number of Exercises : {course.excercises.length}</h3>
        <h3>Progress: {progress}%</h3>


     <h3></h3>
     <div className="Coursee1">
        {course.videos.map((vid,i) => (
                
                <button 
                id = "register" 
                className='btn' 
                type="submit" 
                variant="contained" 
                color="primary" 
                onClick={() => handleSubmit5(course.Courseid,vid.id)}>
                Video {i+1}
                 </button>
                 
                                       
               ))}</div>
               
               




        <h3>preview video press here  :   <a href={course.preview} target="_blank" style={{color: 'blue'}}>  {course.preview}</a></h3>

        


     <button 
    onClick={() => getProgress(course.Courseid)}>
    show progress
     </button>

     <h3></h3>

 

     <h3></h3>
     
     <button onClick={() => handleReceiveCertificate(course.Courseid)}>Receive Certificate</button>
<h3></h3>
<button onClick={() => handleDownloadCertificate(course.Courseid)}>Download Certificate</button>
<h3></h3>
<button onClick={() => Refund(course.Courseid)}>request a refund </button>


     


     
        
    </div>
))}
</div></>
);
}

export default UserRegisteredCourses;
