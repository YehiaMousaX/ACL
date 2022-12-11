import React, {useState }  from 'react';
import './style.css'



const Signup = () => {

    const [Name, setName] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Age, setAge] = useState(null);
    const [BornIn, setBornIn] = useState(null);
    const [LivesIn, setLivesIn] = useState(null);
    const [MartialStatus, setMartialStatus] = useState(null);
    const [PhoneNumber, setPhoneNumber] = useState(null);
    const [Job, setJob] = useState(null);
    const [password,setPassword] = useState(null);
   
   
    const handleSubmit  = async () => {
        let newuser = {
            "password": password,
            "Name": Name,
            "Email": Email,
            "Age": Age,
            "BornIn":BornIn,
            "Country": LivesIn,
            "MartialStatus": MartialStatus,
            "PhoneNumber": PhoneNumber,
            "Job": Job
            
            
        }
        console.log(newuser);
        await fetch('http://localhost:8000/signup', {
            method: 'POST',
            
            headers: {
                accept : 'application/json'
            },
            body: JSON.stringify(newuser),
        })
        .catch(error => {
            window.alert(error);
            return;
});
         window.alert("ADDED SUCESS")

};




    return (
 
        <div className="form">
          <div className="form-body">
              <div className="Name">
                  <label className="form__label" for="Name">Name </label>
                  <input className="form__input" type="text"  value={Name} onChange ={(e)=>{setName(e.target.value)}} id="Name" placeholder="Name"/>
              </div>
              <div className="Email">
                  <label className="form__label" for="Email">Email </label>
                  <input  type="text" id="Email" className="form__input"  value={Email} onChange ={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
              </div>
              <div className="Age">
                  <label className="form__label" for="Age">Age</label>
                  <input className="form__input" type="Number" id="Age"  value={Age} onChange ={(e)=>{setAge(e.target.value)}} placeholder="Age"/>
              </div>
              <div className="BornIn">
                  <label className="form__label" for="BornIn">BornIn </label>
                  <input className="form__input" type="text" id="BornIn"  value={BornIn} onChange ={(e)=>{setBornIn(e.target.value)}}placeholder="BornIn"/>
              </div>
              <div className="LivesIn">
                  <label className="form__label" for="LivesIn">LivesIn </label>
                  <input className="form__input" type="text" id="LivesIn"  value={LivesIn} onChange ={(e)=>{setLivesIn(e.target.value)}}placeholder="LivesIn"/>
              </div>

              <div className="MartialStatus">
                  <label className="form__label" for="MartialStatus">MartialStatus </label>
                  <input className="form__input" type="text" id="MartialStatus"  value={MartialStatus} onChange ={(e)=>{setMartialStatus(e.target.value)}} placeholder="MartialStatus"/>
              </div>
              <div className="PhoneNumber">
                  <label className="form__label" for="PhoneNumber">PhoneNumber </label>
                  <input className="form__input" type="text" id="PhoneNumber" value={PhoneNumber} onChange ={(e)=>{setPhoneNumber(e.target.value)}} placeholder="PhoneNumber"/>
              </div>
              <div className="Job">
                  <label className="form__label" for="Job">Job </label>
                  <input className="form__input" type="text" id="Job"  value={Job} onChange ={(e)=>{setJob(e.target.value)}}placeholder="Job"/>
              </div>
              
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password"  value={password}onChange ={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword"    placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button  type="submit" class="btn" id='signup'  onClick={()=>handleSubmit()} >Sumbit</button>
              </div>

          </div>

)



}

export default Signup ;