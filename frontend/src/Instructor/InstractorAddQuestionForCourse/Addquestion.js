import axios from 'axios';
import React, { useState } from 'react';
import  "./Addquestion.css"

function Addquestion() {
  const [courseid, setcourseid] = useState('');
  const [question, setquestion] = useState('');
  const [answer1, setanswer1] = useState('');
  const [answer2, setanswer2] = useState('');
  const [answer3, setanswer3] = useState('');
  const [answer4, setanswer4] = useState('');

  const [answer11, setanswer11] = useState(false);
  const [answer22, setanswer22] = useState(false);
  const [answer33, setanswer33] = useState(false);
  const [answer44, setanswer44] = useState(false);

  const [error, setError] = useState(false);
  const [errorcorr, setErrorcorr] = useState(false);
  const [errorcorrs, setErrorcorrs] = useState(false);

  const [validcourse, setvalidcourse] = useState();
  const [submitted, setSubmitted] = useState(false);

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>  Question  successfully Added !!</h1>
      </div>
    );
  };
  
  
  
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>* Please enter all the fields*</h1>
      
      
    </div>
    );
  };

  const errorcorrr = () => {
    return (
      <div
        className="error"
        style={{
          display: errorcorr ? '' : 'none',
        }}>
        <h1>* One Answer Must be true and the other 3 false *</h1>
      
      
    </div>
    );
  };

  
  const errorcourse = () => {
    return (
      <div
        className="error"
        style={{
          display: errorcorrs? '' : 'none',
        }}>
        <h1>* this course Not found or you are not registered for this course *</h1>
      
      
    </div>
    );
  };



  

 


 
  const  handleSubmit = e => {
     
     const instractorEmail =  " "+ localStorage.getItem('UserEmail') ;
     console.log (localStorage.getItem('UserEmail'));

     axios.post('http://localhost:8000/instractor/coursevalid', { courseid : courseid , instractorid : instractorEmail })
    .then(response => {
      console.log(response.data)
      setvalidcourse(response.data)
    })
    .catch(error => {
      console.error(error);
    });


    if (courseid === '' || question === '' || answer1 === '' || answer2 === ''|| answer3 === ''|| answer4 === '') {
        setError(true); 
        setErrorcorr(false );
        setErrorcorrs(false) ;


    }
   else if ( answer11 === false && answer22 === false && answer33 === false && answer44 === false  ) {
       setErrorcorr(true );
       setError(false); 
       setErrorcorrs(false) ;


    }
    else if (validcourse === '') {
        setErrorcorr(false );
        setError(false);
        setErrorcorrs(true) ;
     }

     else {
      setErrorcorr(false );
      setError(false);
      setErrorcorrs(false) ;
      setSubmitted(true);
      axios.post('http://localhost:8000/instractor/createquestion', { courseid : courseid , question : {
    
       
      "text": question,  "options": [
        { "id": 0, "text": answer1, "isCorrect": answer11 },
        { "id": 1, "text": answer2, "isCorrect": answer22 },
        { "id": 2, "text": answer3, "isCorrect": answer33 },
        { "id": 3, "text": answer4, "isCorrect": answer44 }

      ]
    }
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error);
    });
     }

  }

  return (
    <div className="form">
      <div>
        <h1>Add Question </h1>
      </div>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
       {errorcourse()}
       {errorcorrr()}
       {successMessage()}
       
      </div>

      <div className="form1">

      
      <label className="label">Course id :</label>
      <input
        type="text"
        id="courseid"
        className="input"
        value={courseid}
        onChange={(event) => setcourseid(event.target.value)}
        />
      <label  className="label">Question:</label>
      <input
        type="text"
        id="question"
        className="input"
        value={question}
        onChange={(event) => setquestion(event.target.value)}
      />

    
      <label className="label">Answer1 :</label>
      <input
        type="text"
        id="answer1"
        className="input"
        value={answer1}
        onChange={(event) => setanswer1(event.target.value)}
      />

      <label className="label">correctness:</label>
      <select
        type="text"
        id="gender"
        className="input"
        value={answer11}
        onChange={(event) => setanswer11(event.target.value)}
      >
        <option value="false">false</option>
         <option value="true">true</option>

      </select>

     <label className="label">Answer 2 :</label>
      <input
        type="text"
        id="answer2"
        className="input"
        value={answer2}
        onChange={(event) => setanswer2(event.target.value)}
      />
      <label className="label">correctness:</label>
      <select
        type="text"
        id="answer22"
        className="input"
        value={answer22}
        onChange={(event) => setanswer22(event.target.value)}
      >
        <option value="false">false</option>
         <option value="true">true</option>

      </select>

<label className="label">Answer 3:</label>
      <input
        type="text"
        id="answer3"
        className="input"
        value={answer3}
        onChange={(event) => setanswer3(event.target.value)}
      />


<label className="label">correctness:</label>
      <select
        type="text"
        id="answer33"
        className="input"
        value={answer33}
        onChange={(event) => setanswer33(event.target.value)}
      >
      <option value="false">false</option>
         <option value="true">true</option>

      </select>
      <label className="label">Answer 4:</label>
      <input
        type="text"
        id="answer4"
        className="input"
        value={answer4}
        onChange={(event) => setanswer4(event.target.value)}
      />
      <label className="label">correctness:</label>
      <select
        type="text"
        id="answer44"
        className="input"
        value={answer44}
        onChange={(event) => setanswer44(event.target.value)}
      >
     <option value="false">false</option>
         <option value="true">true</option>

      </select>
     
      <br>
      </br>


      <button id = "signup" className="btn" type="submit" onClick={handleSubmit} variant="contained" color="primary">submit</button>
       
      
</div>
</div>

  );
}

export default Addquestion;



