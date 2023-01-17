import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewAllCourse = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    }

    return (
        <div className='navbar'>
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
                <div className="FilterSubject">
                    <select value={filterValue} onChange={handleFilterChange}>
                        <option value="All1">All Subject</option>
                        <option value="category1">Math</option>
                        <option value="category2">CS</option>
                        <option value="category3">Mangement</option>
                    </select>
                </div>
                <div className="FilterPrice">
                    <select value={filterValue} onChange={handleFilterChange}>
                        <option value="All2">All Price</option>
                        <option value="category4"> below 300  </option>
                        <option value="category5"> below 200  </option>
                        <option value="category6"> below 100  </option>
                    </select>
                </div>
                <div className="search">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchValue} 
                        onChange={handleSearchChange}
                    />
                    <button>Search</button>
                </div>
        </div>
    );
}

export default ViewAllCourse;




