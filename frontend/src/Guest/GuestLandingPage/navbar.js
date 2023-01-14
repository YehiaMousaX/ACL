import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ()=> {
  return (
<div className='navbar'>
  <div className='logo'>
    Online Courses
  </div>
  <nav className='item'>
    <ul className='ul'>
      <li>
        <Link to = '/'>Home</Link>
      </li>
      <li>
        <Link to = '/About'>About</Link>
      </li>
      <li>
        <Link to = '/Contacts'>Contacts</Link>
      </li>
      <li>
        <Link 
        to = '/SignUp'>SignUp</Link>
      </li>
      <li>
        <Link to = '/Login'>Login</Link>
      </li>
    </ul>
  </nav>
  <form className='search-form'>
      <input type='text' placeholder='Search...' />
      <button type='submit'>Search</button>
    </form>
</div>

  );
}

export default Navbar;