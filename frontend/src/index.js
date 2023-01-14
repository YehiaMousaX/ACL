import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';


import App from './App';
import Loginform from './Login/login';
import SignUpForm from './SignUp/signup';
ReactDOM.render(
  <Router>
    <Routes>
        <Route path='/'element={<App/>}/>
        <Route path = '/SignUp' element={<SignUpForm/>}/>
        <Route path = '/Login' element={<Loginform/>}/>

    </Routes>
  </Router>,
  document.getElementById('root') 
);

