import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';


import App from './App';
import Loginform from './Login/login';
import SignUpForm from './SignUp/signup';

import LandingPage from './Guest/GuestLandingPage/landingPage';

import UserLandingPage from './User/UserLandingPage/UserLanding';
import InstructorLandingPage  from './Instructor/instructorLandingPage/InstructorLanding';
import AdminLandingPage from './Admin/AdminLandingPage/AdminLanding';

import ViewAllCourse from './Instructor/InstructorViewAllCourses/ViewAllCourse';
import ProfileInstructorPage from './Instructor/InstractorProfileAndEdit/profileInstructor';
import ChangePassword from './Instructor/InstractorChangePassword/changePassword';


import CorporateuserLandingPage from './Corporateuser/CorporateuserLandingPage/CorporateuserLanding';
import UserShowAllCourse from './Instructor/UserShowAllCourses/UserShowAllCourse';
import UserShowAllCourse1 from './User/UserShowAllCourses/UserShowAllCourse';
import UserShowAllCourse2 from './Corporateuser/UserShowAllCourses/UserShowAllCourse';
import UserShowAllCourse3 from './Guest/UserShowAllCourses/UserShowAllCourse';
import AddCourseForm  from './Instructor/InstractorAddCourse/addCourse';
import InstructorCourses from './Instructor/CoursesOfInstractor/instructorCourse';

ReactDOM.render(
  <Router>
    <Routes>
        <Route path='/'element={<App/>}/>
        <Route path = '/SignUp' element={<SignUpForm/>}/>
        <Route path = '/Login' element={<Loginform/>}/>
        <Route path = '/UserLandingPage' element={<UserLandingPage/>}/>
        <Route path = '/InstructorLandingPage' element={<InstructorLandingPage/>}/>
        <Route path = '/AdminLandingPage' element={<AdminLandingPage/>}/>
        <Route path = '/ViewAllCourse' element={<ViewAllCourse/>}/>
        <Route path = '/ProfileInstructorPage' element={<ProfileInstructorPage/>}/>
        <Route path = '/ChangePassword' element={<ChangePassword/>}/>
        <Route path = '/CorporateuserLandingPage' element={<CorporateuserLandingPage/>}/>
        <Route path = '/user/UserShowAllCourse' element={<UserShowAllCourse1/>}/>
        <Route path = '/instractor/UserShowAllCourse' element={<UserShowAllCourse/>}/>
        <Route path = '/coporateuser/UserShowAllCourse' element={<UserShowAllCourse2/>}/>
        <Route path = '/Guest/UserShowAllCourse' element={<UserShowAllCourse3/>}/>
        <Route path = '/' element={<LandingPage/>}/>
        <Route path = '/instractor/createnewcourse' element={<AddCourseForm/>}/>
        <Route path = '/InstructorCourses' element={<InstructorCourses/>}/>

        
        

    </Routes>
  </Router>,
  document.getElementById('root') 
);

