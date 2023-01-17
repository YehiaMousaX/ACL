import React, { useState } from 'react';
import axios from 'axios';
import "./userpayforcourse.css"
import { Link } from 'react-router-dom';

function CreditCardPayment() {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [reloading, setReloading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1> Course successfully registered!!</h1>
          </div>
        );
      };
    
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

      const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data here
        setReloading(true);
        setTimeout(() => {
          setReloading(false);
          setSubmitted(true) ;
          axios.post('http://localhost:8000/user/Addregisteredcourses' , {  Email:""+localStorage.getItem('UserEmail') ,
          RegisteredCourseid :  JSON.parse(localStorage.getItem('usercourse')) })
    
              .then((res) => {
                console.log(res.data)    
              })
              .catch((err) => console.log(err));
  
  
        }, 5000);
       
        
       }


  return  (

    
 <><><><div className='navbar'>
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


          <div className="dropdown">
              <button className="dropbtn">User
                  <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                  <Link to='/MyProfile'>My Profile</Link>
                  <Link to='/'>Logout</Link>


              </div>
          </div>
         
      </div>
      
      
      
      </>
      <div className="messages">
        {successMessage()}
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
                   <button id="pay" type="submit" onClick={handleSubmit} variant="contained" color="primary" >ADD AND PAY</button>     {reloading && (
                  <div>
                      <p>Reloading...</p>
                      <div className="loading-spinner" />
                  </div>

                  
              )}
                
          </form></><div>
          
             
          </div>
          
          
          </>
  );
}

  


export default CreditCardPayment;
