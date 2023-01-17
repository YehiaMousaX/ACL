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
                      <Link to='/AdminLandingPage'>Home</Link>
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
                      <Link to='/'>Logout</Link>
                      <Link to='/admin/AdminAdd'>Add another admin</Link>
                      <Link to='/admin/AdminAddinst'>Add Instructor</Link>
                      <Link to='/admin/AdminAddcouser'>Add coroporateuser</Link>
                      <Link to='/admin/AdminAdddiscount'>Add discount for course</Link>
                      <Link to='/admin/viewrequest'>View Coporateuser requests</Link>
                      <Link to='/admin/refundmoney'>Refund Money for trainne</Link>#
                      <Link to='/admin/viewreportedproblems'>View Reported Problems</Link>


                  </div>
              </div>
          
      </div>
      
      <div className="landing-page">
              <header>
                  <h1>Welcome BOSS </h1>
              </header>
             
          </div></>
  );
}

export default AdminLandingPage;
