import React from 'react';
import './AdminLanding.css';
import CS from "./images/CS.jpg";
import Math from "./images/Math.jpg";
import Mangement from "./images/Mangement.jpg";
import { Link } from 'react-router-dom';

function AdminLandingPage() {
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
                  <button className="dropbtn">ADMIN
                      <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                      <Link to='/MyProfile'>My Profile</Link>
                      <Link to='/Logout'>Logout</Link>
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
                              <button>Learn More</button>
                          </article>
                          <article className="featured-course">
                              <img src={Math} alt="Course 2" />
                              <h3>Discrete Math Course</h3>
                              <p>Discrete math is a branch of math focused on discrete objects, such as integers and graphs. It is used to model and analyze algorithms, data structures, and computer systems. A discrete math course teaches students about topics like set theory, combinatorics, and graph theory, and helps them develop problem-solving skills. It may be useful for careers in computer science, software development, and data analysis.</p>
                              <button>Learn More</button>
                          </article>
                          <article className="featured-course">
                              <img src={Mangement} alt="Course 3" />
                              <h3>Mangement Course</h3>
                              <p>Management is the process of leading and directing an organization to achieve its goals. A management course teaches students about leadership, communication, financial management, and other management principles and practices. It may prepare students for careers as managers or leaders in various industries. Management courses may also be useful for individuals pursuing careers in business, healthcare, education.</p>
                              <button>Learn More</button>
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

export default AdminLandingPage;