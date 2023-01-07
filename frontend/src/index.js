import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';


import App from './App';
import Login from './components/Login';
import SignUpForm from './components/SignUp/signup';
import ProfilePage from './components/profileInstructor'

ReactDOM.render(
  <Router>
    <Routes>
        <Route path='/'element={<App/>}/>
        <Route path = '/SignUp' element={<SignUpForm/>}/>
        <Route path = '/Login' element={<Login/>}/>
        <Route path = '/ProfilePage' element={<ProfilePage/>}/>
    </Routes>
  </Router>,
  document.getElementById('root') 
);

