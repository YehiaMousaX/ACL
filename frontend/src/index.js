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
import Addquestion from './Instructor/InstractorAddQuestionForCourse/Addquestion';
import Userchoosecountry from './User/UserChooseCountry/userchoosecountry';
import Instractorchoosecountry from './Instructor/InstractorChooseCountry/instractorchoosecountry';
import Corporateuserchoosecountry from './Corporateuser/CorporateuserChooseCountry/corporateuserchoosecountry';
import Guestchoosecountry from './Guest/GuestChooseCountry/guestchoosecountry';
import CreditCardPayment from './User/Userpayforcourse/userpayforcourse';
import UserRegisteredCourses from './User/userRegisteredCourses/userRegisteredCourses';
import CoroporateRegisteredCourses from './Corporateuser/coroporateRegisteredCourses/coroporateRegisteredCourses';
import UseropenExamCourses from './User/UserSolveExcersice/UseropenExamCourses';
import UserRateCourse from './User/UserRateCourse/userratecourse';
import UserRateInstructor from './User/UserRateInstractor/userrateinstractor';
import CoroporateRateCourse from './Corporateuser/coroporateuserRateCourse/coroporateuserRateCourse';
import CoroporateRateInstructor from './Corporateuser/coroporateuserRateInstractor/coroporateuserRateInstractor';
import AdminAdd from './Admin/AdminAddAdmin/adminAdd';
import AdminAddinstr from './Admin/AdminAddinstractor/adminAddinst';
import AdminAddcouser from './Admin/AdminAddcoporateuser/adminAddcouser';
import UserShowAllCourse5 from './Admin/UserShowAllCourses/UserShowAllCourse';
import AdminViewRequested from './Admin/AdminViewRequested/AdminViewRequested';

import ViewInstructorContract from './Instructor/ViewInstructorContract/ViewInstructorContract';
import InstructorCourses from './Instructor/instructorViewMyCourse/instructorViewMyCourse';
import RefundMoney from './Admin/refundmoney/refundmoney';
import Adminrviewproblem from './Admin/adminviewreportedproblems/adminviewreportedproblems';
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
        <Route path = '/instractor/Addquestion' element={<Addquestion/>}/>
        <Route path = '/user/userchoosecountry' element={<Userchoosecountry/>}/>
        <Route path = '/instractor/instractorchoosecountry' element={<Instractorchoosecountry/>}/>
        <Route path = '/corporateuser/Corporateuserchoosecountry' element={<Corporateuserchoosecountry/>}/>
        <Route path = '/Guest/Guestchoosecountry' element={<Guestchoosecountry/>}/>
        <Route path = '/user/userpayforcourse' element={<CreditCardPayment/>}/>
        <Route path = '/user/UserShowAllCourseregistered' element={<UserRegisteredCourses/>}/>
        
        <Route path = '/corporateuser/CoroporateRegisteredCourses' element={<CoroporateRegisteredCourses/>}/>
        <Route path = '/user/UseropenExamCourses' element={<UseropenExamCourses/>}/>
        <Route path = '/user/UserRateCourse' element={<UserRateCourse/>}/>
        <Route path = '/user/UserRateInstractor' element={<UserRateInstructor/>}/>
        
        <Route path = '/coroporateuser/UserRateInstractor' element={<CoroporateRateCourse/>}/>
        <Route path = '/coroporateuser/CoroporateRateInstructor' element={<CoroporateRateInstructor/>}/>
        <Route path = '/admin/AdminAdd' element={<AdminAdd/>}/>
        <Route path = '/admin/AdminAddinst' element={<AdminAddinstr/>}/>
        <Route path = '/admin/AdminAddcouser' element={<AdminAddcouser/>}/>


        <Route path = '/instructor/ViewInstructorContract' element={<ViewInstructorContract/>}/>
        <Route path = '/instructor/InstructorCourses' element={<InstructorCourses/>}/>
        
        <Route path = '/admin/AdminAdddiscount' element={<UserShowAllCourse5/>}/>
        <Route path = '/admin/viewrequest' element={<AdminViewRequested/>}/>
        
        <Route path = '/admin/refundmoney' element={<RefundMoney/>}/>
        <Route path = '/admin/viewreportedproblems' element={<Adminrviewproblem/>}/>


    </Routes>
  </Router>,
  document.getElementById('root') 
);

