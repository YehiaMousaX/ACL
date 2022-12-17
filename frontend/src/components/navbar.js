import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">Online Course</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/courses">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <form className="search-form">
          <input type="text" placeholder="Search courses" />
          <button type="submit">Search</button>
        </form>
        <select className="filter-select">
           <option value="all">All Courses</option>
           <option value="price-low-to-high">Price: Low to High</option>
           <option value="price-high-to-low">Price: High to Low</option>
           <option value="rating-high-to-low">Rating: High to Low</option>
          <option value="subject">Subject</option>
        </select>

        <a className="nav-link" href="/signup">Sign Up</a>
        <a className="nav-link" href="/login">Log In</a>
      </div>
    </nav>
  );
}

export default Navbar;