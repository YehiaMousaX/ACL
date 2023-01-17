import React from 'react';
import "./UserShowAllCourse.css"
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserShowAllCourse3() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setfilterQuery] = useState('');
  const [filterQuery1, setfilterQuery1] = useState('');
  const [filterQuery2, setfilterQuery2] = useState('');


  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
 
  const Logout = (event) => {
    localStorage.clear();
 };
  

 const handleClick = () => {
  setClicked(true);
}
const handleClick1 = () => {
  setClicked1(true);
}



  useEffect(() => {
    if (searchQuery==='' ) {

    axios.get('http://localhost:8000/user/AllCourses')
      .then((res) => {
        setCourses(res.data);

      })
      .catch((err) => console.log(err));
      if (clicked1 === true) {
        if (filterQuery === '' && filterQuery1 ==='' && filterQuery2 === '') {
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


         if (filterQuery !== '' && filterQuery1 ==='' && filterQuery2 === '') {
           courses.filter((course) => {
             if (course.Subject === filterQuery) {
               filteredCourses.push(course);
             }
           })
           setCourses(filteredCourses) ;
         }
         if (filterQuery === '' && filterQuery1 !=='' && filterQuery2 === '') {
           courses.filter((course) => {
             if (parseInt(course.price) <= parseInt(filterQuery1)) {
               filteredCourses.push(course);
             }
           })
           setCourses(filteredCourses) ;
         }
         
         if (filterQuery === '' && filterQuery1 ==='' && filterQuery2 !== '') {
           courses.filter((course) => {
             if (parseInt(courserate(course.rate)) >= parseInt(filterQuery2)) {
               filteredCourses.push(course);
             }
           })
           setCourses(filteredCourses) ;
         }

         if (filterQuery !== '' && filterQuery1 !=='' && filterQuery2 === '') {
           courses.filter((course) => {
             if (course.Subject === filterQuery) {
               filteredCourses.push(course);
             }
           })
           filteredCourses.filter((course) => {
             if (parseInt(course.price) <= parseInt(filterQuery1)) {
               filteredCourses1.push(course);
             }
           })
           setCourses(filteredCourses1) ;
         }

         if (filterQuery !== '' && filterQuery1 ==='' && filterQuery2 !== '') {
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
       
         if (filterQuery === '' && filterQuery1 !=='' && filterQuery2 !== '') {
           courses.filter((course) => {
             if (parseInt(course.price) <= parseInt(filterQuery1)) {
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

         if (filterQuery !== '' && filterQuery1 !=='' && filterQuery2 !== '') {
           courses.filter((course) => {
             if (course.Subject === filterQuery) {
               filteredCourses.push(course);
             }
           })
           filteredCourses.filter((course) => {
             if (parseInt(course.price) <= parseInt(filterQuery1)) {
               filteredCourses1.push(course);
             }
           })
           filteredCourses1.filter((course) => {
             if (parseInt(courserate(course.rate)) >= parseInt(filterQuery2)) {
               filteredCourses2.push(course);
             }
           })
           setCourses(filteredCourses2) ;
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
        if (filterQuery === '' && filterQuery1 ==='' && filterQuery2 === '') {
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


          if (filterQuery !== '' && filterQuery1 ==='' && filterQuery2 === '') {
            courses.filter((course) => {
              if (course.Subject === filterQuery) {
                filteredCourses.push(course);
              }
            })
            setCourses(filteredCourses) ;
          }
          if (filterQuery === '' && filterQuery1 !=='' && filterQuery2 === '') {
            courses.filter((course) => {
              if (parseInt(course.price) <= parseInt(filterQuery1)) {
                filteredCourses.push(course);
              }
            })
            setCourses(filteredCourses) ;
          }
          
          if (filterQuery === '' && filterQuery1 ==='' && filterQuery2 !== '') {
            courses.filter((course) => {
              if (parseInt(courserate(course.rate)) >= parseInt(filterQuery2)) {
                filteredCourses.push(course);
              }
            })
            setCourses(filteredCourses) ;
          }

          if (filterQuery !== '' && filterQuery1 !=='' && filterQuery2 === '') {
            courses.filter((course) => {
              if (course.Subject === filterQuery) {
                filteredCourses.push(course);
              }
            })
            filteredCourses.filter((course) => {
              if (parseInt(course.price) <= parseInt(filterQuery1)) {
                filteredCourses1.push(course);
              }
            })
            setCourses(filteredCourses1) ;
          }

          if (filterQuery !== '' && filterQuery1 ==='' && filterQuery2 !== '') {
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
        
          if (filterQuery === '' && filterQuery1 !=='' && filterQuery2 !== '') {
            courses.filter((course) => {
              if (parseInt(course.price) <= parseInt(filterQuery1)) {
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

          if (filterQuery !== '' && filterQuery1 !=='' && filterQuery2 !== '') {
            courses.filter((course) => {
              if (course.Subject === filterQuery) {
                filteredCourses.push(course);
              }
            })
            filteredCourses.filter((course) => {
              if (parseInt(course.price) <= parseInt(filterQuery1)) {
                filteredCourses1.push(course);
              }
            })
            filteredCourses1.filter((course) => {
              if (parseInt(courserate(course.rate)) >= parseInt(filterQuery2)) {
                filteredCourses2.push(course);
              }
            })
            setCourses(filteredCourses2) ;
          }

        }
      }

      }
  }, [searchQuery, clicked, clicked1, filterQuery, courses, filterQuery1, filterQuery2]);

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
            <input    placeholder="filter and put maximum price"
           className='input' type="text" onChange={(e) => setfilterQuery1(e.target.value)} value={filterQuery1} />
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
                  <Link to='/' onClick={Logout}>Logout</Link>
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
                      <h3>Subject : {course.Subject}</h3>
                      <h3>Instractur Email : {course.instractorid}</h3>
                      <h3>rate : {courserate(course.rate)}</h3>


                  </div>
              ))}
          </div></>
  );
}

export default UserShowAllCourse3;
