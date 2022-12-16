import axios from 'axios';
import React, { useState } from 'react';


function SignUpForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [bornIn, setBornIn] = useState('');
  const [martialStatus, setMartialStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [job, setJob] = useState('');
  const [gender, setGender] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState('');

  
  

  const  handleSubmit = e => {
    e.preventDefault();
     
    axios.post('http://localhost:8000/user/signup', {
      Name: name,
      password: password,
      Email: Email,
      Age: age,
      BornIn: bornIn,
      MartialStatus: martialStatus,
      PhoneNumber: phoneNumber,
      Job: job ,
      Gender: gender
  } ,{
          headers: {
          'Content-Type': "application/json",
          'Accept': "application/json",
          } 
    } )
    .then((response) => {
      alert("successful sign up ");
    })
    .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <label htmlFor="passwordconfirm">PasswordConfirm:</label>
      <input
        type="password"
        id="password"
        value={passwordconfirm}
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <label htmlFor="bornIn">Born in:</label>
      <input
        type="text"
        id="bornIn"
        value={bornIn}
        onChange={(event) => setBornIn(event.target.value)}
      />
      <br />
      <label htmlFor="martialStatus">Martial status:</label>
      <select
        type="text"
        id="martialStatus"
        value={martialStatus}
        onChange={(event) => setMartialStatus(event.target.value)}
      >
         <option value="single">Single</option>
         <option value="married">Married</option>
         <option value="divorced">Divorced</option>
        </select>
      <br />
      <label htmlFor="phoneNumber">Phone number:</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <br />
      <label htmlFor="job">Job:</label>
      <input
        type="text"
        id="job"
        value={job}
        onChange={(event) => setJob(event.target.value)}
      />
      <br />
     
      <label htmlFor="gender">Gender:</label>
      <select
        type="text"
        id="gender"
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="male">male</option>
         <option value="female">female</option>

        </select>
      <br />


      
      <button type="submit" onClick={handleSubmit} variant="contained" color="primary">Sign up</button>
      <br />
      <button type="submit" >Login</button>
      
    </form>
  );
}

export default SignUpForm;



