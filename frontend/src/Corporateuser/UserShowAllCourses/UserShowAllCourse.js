import React from 'react';
import "./UserShowAllCourse.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserShowAllCourse2() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setfilterQuery] = useState('');
  const [filterQuery2, setfilterQuery2] = useState('');


  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  

 const handleClick = () => {
  setClicked(true);
}
const handleClick1 = () => {
  setClicked1(true);
}
const errorMessage = () => {
  return (
    <div
      className="error"
      style={{
        display: error ? '' : 'none',
      }}>
      <h1>* you have send request before wait untill admin accept*</h1>
    
    
  </div>
  );
};
const successMessage = () => {
  return (
    <div
      className="success"
      style={{
        display: submitted ? '' : 'none',
      }}>
      <h1>Request sent successfully Wait untill admin accept</h1>
    </div>
  );
};

function handleSubmit(x) {
  
  axios.post('http://localhost:8000/Coroporateuser/Addrequest' ,{ courseId : x , userEmail : localStorage.getItem("UserEmail") })
  .then((res) => {
   console.log(res.data)
   if (res.data=== true) {
    setSubmitted(true);
    setError(false) ;
     }
    else {
      setSubmitted(false);
    setError(true) ;
    }
  })
  .catch((err) => console.log(err));

}

  useEffect(() => {
    if (searchQuery==='' ) {

    axios.get('http://localhost:8000/user/AllCourses')
      .then((res) => {
        setCourses(res.data);

      })
      .catch((err) => console.log(err));
      if (clicked1 === true) {
        if (filterQuery === '' &&  filterQuery2 === '') {
          axios.get('http://localhost:8000/user/AllCourses')
          .then((res) => {
            setCourses(res.data);
          })
          .catch((err) => console.log(err));
          axios.post('http://localhost:8000/user/search/substring1' , { substring : searchQuery })

          .then((res) => {
            setCourses(res.data);
    
          })
          .catch((err) => console.log(err));
          setClicked1(false);

        }
        
        else {
          
          const filteredCourses = [] ;
          const filteredCourses1 = [] ;
          const filteredCourses2 = [] ;


         if (filterQuery !== ''  && filterQuery2 === '') {
           courses.filter((course) => {
             if (course.Subject === filterQuery) {
               filteredCourses.push(course);
             }
           })
           setCourses(filteredCourses) ;
         }
         
         
         if (filterQuery === ''  && filterQuery2 !== '') {
           courses.filter((course) => {
             if (parseInt(courserate(course.rate)) >= parseInt(filterQuery2)) {
               filteredCourses.push(course);
             }
           })
           setCourses(filteredCourses) ;
         }


         if (filterQuery !== ''  && filterQuery2 !== '') {
           courses.filter((course) => {
             if (course.Subject === filterQuery) {
               filteredCourses.push(course);
             }
           })
           filteredCourses.filter((course) => {
             if (parseInt(courserate(course.rate)) >= parseInt(filterQuery2)) {
               filteredCourses1.push(course);
             }
           })
           setCourses(filteredCourses1) ;
         }
       
        

       }

    }


    }
    else {
      axios.post('http://localhost:8000/user/search/substring1' , { substring : searchQuery })

      .then((res) => {
        setCourses(res.data);

      })
      .catch((err) => console.log(err));

      if (clicked1 === true) {
        if (filterQuery === ''  && filterQuery2 === '') {
          axios.get('http://localhost:8000/user/AllCourses')
          .then((res) => {
            setCourses(res.data);
          })
          .catch((err) => console.log(err));
          axios.post('http://localhost:8000/user/search/substring1' , { substring : searchQuery })

          .then((res) => {
            setCourses(res.data);
    
          })
          .catch((err) => console.log(err));
          setClicked1(false);

        }
        else {
          
          const filteredCourses = [] ;
          const filteredCourses1 = [] ;
          const filteredCourses2 = [] ;


         if (filterQuery !== ''  && filterQuery2 === '') {
           courses.filter((course) => {
             if (course.Subject === filterQuery) {
               filteredCourses.push(course);
             }
           })
           setCourses(filteredCourses) ;
         }
         
         
         if (filterQuery === ''  && filterQuery2 !== '') {
           courses.filter((course) => {
             if (parseInt(courserate(course.rate)) >= parseInt(filterQuery2)) {
               filteredCourses.push(course);
             }
           })
           setCourses(filteredCourses) ;
         }


         if (filterQuery !== ''  && filterQuery2 !== '') {
           courses.filter((course) => {
             if (course.Subject === filterQuery) {
               filteredCourses.push(course);
             }
           })
           filteredCourses.filter((course) => {
             if (parseInt(courserate(course.rate)) >= parseInt(filterQuery2)) {
               filteredCourses1.push(course);
             }
           })
           setCourses(filteredCourses1) ;
         }
       
        

       }
      }

      }
  }, [searchQuery, clicked, clicked1, filterQuery, courses, filterQuery2]);

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
            <input    placeholder="filter and put minimum rate"
           className='input' type="text" onChange={(e) => setfilterQuery2(e.target.value)} value={filterQuery2} />
           <button className='btn1'onClick={handleClick1}>filter</button>

        </div>

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
          <div className="messages">
        {successMessage()}
        {errorMessage()}

      </div>
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

        {course.subtitles.map((sub) => (
                <div className="Coursee1">
                <h3>subtitle : {sub}  </h3>
                <h3>Link Youtube :  </h3>
                <a href={sub[1]} target="_blank" style={{color: 'blue'}}> {sub[1]}</a>
                 <h3>total hour : {sub[2]}  </h3>

                  </div>

               ))}
        <h3>preview video press here  :   <a href={course.preview} target="_blank" style={{color: 'blue'}}>  {course.preview}</a></h3>
       
        <div class="button-container">
        
         
        <button id = "register" className='btn' type="submit" variant="contained" color="primary" onClick={() => handleSubmit(course.Courseid)}> Register </button>

   </div>
        
         
        
    </div>
))}
</div></>
);
}

export default UserShowAllCourse2;
