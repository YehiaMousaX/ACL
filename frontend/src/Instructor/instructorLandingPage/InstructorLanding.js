import React, { useState } from 'react';
import './InstructorLanding.css';
import CS from "./images/CS.jpg";
import Math from "./images/Math.jpg";
import Mangement from "./images/Mangement.jpg";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from "react-modal";
function InstructorLandingPage() {
  
  
     const [isModal1Open, setIsModal1Open] = useState(false);
     const [close1, setclose1] = useState(false);
     const [isModal2Open, setIsModal2Open] = useState(false);
     const [close2, setclose2] = useState(false);
     const [isModal3Open, setIsModal3Open] = useState(false);
     const [close3, setclose3] = useState(false);
     const [courses, setCourses] = useState([]);
 
     const close11 = () => {
       setclose1(true);
       setIsModal1Open(false);
   
     };
     const close22 = () => {
         setclose2(true);
         setIsModal2Open(false);
     
       };
       const close33 = () => {
         setclose3(true);
         setIsModal3Open(false);
     
       };
     const helper1 = () => {
 
         setIsModal1Open(true);
     axios.post('http://localhost:8000/user/search/substring' , { substring:"cs" })
     .then((res) => {
       setCourses(res.data);
 
     })
     .catch((err) => console.log(err));
    };
  
    const helper2 = () => {
 
     setIsModal1Open(true);
     axios.post('http://localhost:8000/user/search/substring' , { substring:"Math" })
     .then((res) => {
      setCourses(res.data);
 
 })
 .catch((err) => console.log(err));
 };
 
 const helper3 = () => {
 
     setIsModal1Open(true);
     axios.post('http://localhost:8000/user/search/substring' , { substring:"Mang" })
     .then((res) => {
      setCourses(res.data);
 
 })
 .catch((err) => console.log(err));
 };


    return (
 
      <><div className='navbar'>
          <div className='logo'>
              Online Courses
          </div>
          <nav className='item'>
              <ul className='ul'>
                  <li>
                      <Link to='/'>Home</Link>
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
                  <button className="dropbtn">Instructor
                      <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                      <Link to='/ProfileInstructorPage'>My Profile</Link>
                      <Link to='/'>Logout</Link>                      <Link to='/instractor/UserShowAllCourse' > All Courses</Link>
                      <Link to='/instractor/createnewcourse' > Create Course</Link>
                      <Link to='/instractor/Addquestion' > Add question for a Course</Link>
                      <Link to='/instractor/instractorchoosecountry' > choose Country </Link>
                      <Link to='/instractor/InstructorCourses' > ViewMyCourses </Link>
                      <Link to='/ChangePassword' > ChangePassword </Link>

                      
                  </div>
              </div>
          
      </div>
      
    <div className="landing-page">
              <header>
                  <h1>Welcome to Our Online Courses</h1>
              </header>
              <main>
                  <section className="featured-courses">
                      <h2>Featured Courses</h2>
                      <div className="featured-courses-container">
                          <article className="featured-course">
                              <img src={CS} alt="Course 1" />
                              <h3>Network Course</h3>
                              <p>A network course teaches students about computer networking principles and technologies. It may cover topics such as network architecture, protocols, security, and performance optimization. Network courses may be offered at various levels and formats and may prepare students for careers as network administrators or IT professionals. They may also be useful for pursuing professional certifications.</p>
                              <button className='btn1' onClick={helper1}>Learn More </button>
                              <Modal
                                isOpen={isModal1Open}
                               onRequestClose={() => setIsModal1Open(false)}
                                 >
                              <div className="Course1-list">

                                    {courses.map((course) => (
                                        <div className="Course1">
                                            <h3>Courseid : {course.Courseid}</h3>
                                            <h3>title : {course.title}</h3>
                                            <h3>totalHours : {course.totalHours}</h3>
                                            <h3>price : {course.price}</h3>


                                        </div>
                                    ))}
                                    </div>
                            <button type="button" className="btn1" onClick={close11}>
                               back
                               </button>
                              </Modal>
                          </article>
                          <article className="featured-course">
                              <img src={Math} alt="Course 2" />
                              <h3>Discrete Math Course</h3>
                              <p>Discrete math is a branch of math focused on discrete objects, such as integers and graphs. It is used to model and analyze algorithms, data structures, and computer systems. A discrete math course teaches students about topics like set theory, combinatorics, and graph theory, and helps them develop problem-solving skills. It may be useful for careers in computer science, software development, and data analysis.</p>
                              <button className='btn1' onClick={helper2}>Learn More </button>
                              <Modal
                                isOpen={isModal2Open}
                               onRequestClose={() => setIsModal2Open(false)}
                                 >
                              <div className="Course-list">

                                    {courses.map((course) => (
                                        <div className="Course">
                                            <h3>Courseid : {course.Courseid}</h3>
                                            <h3>title : {course.title}</h3>
                                            <h3>totalHours : {course.totalHours}</h3>
                                            <h3>price : {course.price}</h3>


                                        </div>
                                    ))}
                                    </div>
                            <button  className="btn1" onClick={close22}>
                               back
                               </button>
                              </Modal>

                          </article>
                          <article className="featured-course">
                              <img src={Mangement} alt="Course 3" />
                              <h3>Mangement Course</h3>
                              <p>Management is the process of leading and directing an organization to achieve its goals. A management course teaches students about leadership, communication, financial management, and other management principles and practices. It may prepare students for careers as managers or leaders in various industries. Management courses may also be useful for individuals pursuing careers in business, healthcare, education.</p>
                              <button className='btn1' onClick={helper3}>Learn More </button>
                              <Modal
                                isOpen={isModal3Open}
                               onRequestClose={() => setIsModal3Open(false)}
                                 >
                              <div className="Course-list">

                                    {courses.map((course) => (
                                        <div className="Course">
                                            <h3>Courseid : {course.Courseid}</h3>
                                            <h3>title : {course.title}</h3>
                                            <h3>totalHours : {course.totalHours}</h3>
                                            <h3>price : {course.price}</h3>


                                        </div>
                                    ))}
                                    </div>
                            <button type="button" className="btn1" onClick={close33}>
                               back
                               </button>
                              </Modal>
                          </article>
                      </div>
                  </section>
              </main>
              <footer>
                  <p>Copyright 2021 Our Online Courses</p>
              </footer>

             
             
      
          </div></>

         
  );
}

export default InstructorLandingPage;
