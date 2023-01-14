import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';


import App from './App';
import Loginform from './Login/login';
import SignUpForm from './SignUp/signup';

import UserLandingPage from './User/UserLandingPage/UserLanding';
import InstructorLandingPage  from './Instructor/instructorLandingPage/InstructorLanding';
import AdminLandingPage from './Admin/AdminLandingPage/AdminLanding';
import CorporateuserLandingPage from './Corporateuser/CorporateuserLandingPage/CorporateuserLanding';
ReactDOM.render(
  <Router>
    <Routes>
        <Route path='/'element={<App/>}/>
        <Route path = '/SignUp' element={<SignUpForm/>}/>
        <Route path = '/Login' element={<Loginform/>}/>

        <Route path = '/UserLandingPage' element={<UserLandingPage/>}/>
        <Route path = '/InstructorLandingPage' element={<InstructorLandingPage/>}/>
        <Route path = '/AdminLandingPage' element={<AdminLandingPage/>}/>
        <Route path = '/CorporateuserLandingPage' element={<CorporateuserLandingPage/>}/>
    </Routes>
  </Router>,
  document.getElementById('root') 
);

