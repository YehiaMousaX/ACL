import React from 'react';
import "./AdminViewRequested.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

function AdminViewRequested() {
  const [requests, setrequests] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setfilterQuery] = useState('');
  const [filterQuery1, setfilterQuery1] = useState('');
  const [filterQuery2, setfilterQuery2] = useState('');


  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  

  const [discount, setdiscount] = useState('');



 const handleClick = () => {
  setClicked(true);
}
const handleClick1 = () => {
  setClicked1(true);
}


function handleSubmit(x) {
  axios.get('http://localhost:8000/admin/Viewrequest' ,{ Courseid : x.Courseid , discount : discount})
  .then((res) => {
    setrequests(res.data);

  })
  .catch((err) => console.log(err));

}

  useEffect(() => {

  

    axios.post('http://localhost:8000/admin/Viewrequest')
      .then((res) => {
        setrequests(res.data);

      })
      .catch((err) => console.log(err));
     
  }, []);





  return  (
    
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
          <div className='search-container'>
            <input    placeholder="Search here"
           className='input' type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
            <button className='btn1'onClick={handleClick}>Search</button>
        </div>
        
        <div className='search-container'>
            <input    placeholder="filter here based on Subject "
           className='input' type="text" onChange={(e) => setfilterQuery(e.target.value)} value={filterQuery} />
        </div>

        <div className='search-container'>
            <input    placeholder="filter and put maximum price"
           className='input' type="text" onChange={(e) => setfilterQuery1(e.target.value)} value={filterQuery1} />
        </div>
        
        <div className='search-container'>
            <input    placeholder="filter and put minimum rate"
           className='input' type="text" onChange={(e) => setfilterQuery2(e.target.value)} value={filterQuery2} />
           <button className='btn1'onClick={handleClick1}>filter</button>

        </div>

          <div className="dropdown">
              <button className="dropbtn">Admin
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
{requests.map((course) => (
    <div className="Course">
        <h3>userEmail : {course.userEmail}</h3>
        <h3>CourseId : {course.courseId}</h3>
        <h3>createdAt : {course.createdAt}</h3>

      
       
        <div class="button-container">

                                    <button id = "register" className='butt'  variant="contained"  > Accept </button>
                                    <button id = "register" className='butt1'  variant="contained"  > Refuse </button>



                 </div>
        
         
        
    </div>
))}
</div></>
);
}

export default AdminViewRequested;
