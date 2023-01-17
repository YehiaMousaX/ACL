import React, { useState } from 'react';
import axios from 'axios';
import "./userpayforcourse.css"
import { Link } from 'react-router-dom';

function CreditCardPayment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  function addSeparator(e) {
    const input = e.target;
    let inputValue = input.value;

    // Remove all non-numeric characters
    inputValue = inputValue.replace(/\D/g, "");

    // Add separator every 4 digits
    inputValue = inputValue.replace(/(\d{4})/g, "$1 ");
    inputValue = inputValue.trim();
  
    input.value = inputValue;
  }

   function handleSubmit (){ 
   
      
      axios.post('http://localhost:8000/user/Addregisteredcourses' , {  Email:""+localStorage.getItem('UserEmail') ,
      RegisteredCourseid :  JSON.parse(localStorage.getItem('usercourse')) })

          .then((res) => {
            console.log(res.data)    
          })
          .catch((err) => console.log(err));
  }



  return (

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
      </div>

      
      <form className="userpayforcourse-form">
      


              <label>
                  Card Number:
                  <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      maxLength="19"
                      placeholder="1111-2222-3333-4444"
                      onKeyUp={addSeparator}
                      title="Card number should contain 16 digits" />
              </label>

              <br />
              <label>
                  Expiration Date:
                  <input
                      type="month"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)} />
              </label>
              <br />
              <label>
                  CVV:
                  <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength="3"
                      title="CVV should contain 3 digits" />
              </label>

              <br />
              <button id = "pay"  type="submit" onClick={handleSubmit()}  variant="contained" color="primary">ADD AND PAY</button>
          </form></>
  );

}

export default CreditCardPayment;
