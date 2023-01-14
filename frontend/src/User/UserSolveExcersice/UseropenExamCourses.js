import React, { useEffect, useState } from "react";
import "./UseropenregisteredCourses.css";
import axios from 'axios';
const chosenquestion = [] ;
const correctq= [] ;

function UseropenregisteredCourses() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setquestions] = useState([]);
    const [courseid, setcourseid] = useState("");
    const [showanswers, setshowanswers] = useState(false);
    const [currentQuestion1, setCurrentQuestion1] = useState(0);

    const [correctanswer, setcorrectanswer] = useState(true);
    const [showsumbit, setshowsumbit] = useState(false);


    useEffect(() => {
        axios.post('http://localhost:8000/user/showquestions', {  courseid : "geo" } )
          .then((res) => {
            // Set the questions state with the data from the API call
            
          //  console.log(res)
            setquestions(res.data[0]);
            setcourseid("geo")
            console.log(res.data)
            
          })
          .catch((err) => console.log(err));
      }, []);
      


  
  // Helper Functions




  /* A possible answer was clicked */
  const optionClicked = (isCorrect,x) => {

    chosenquestion[currentQuestion]=(x) 
  
    
    
  };


 

  const nextquestion = () => {
    if (currentQuestion + 1 < questions.length) {
      var y = currentQuestion+1
      setCurrentQuestion(y);
    } else {
      setshowsumbit(true);
    }

  };

  const perviousquestion = () => {
    if (currentQuestion > 0) {
      var x = currentQuestion-1
      setCurrentQuestion(x);
      setshowsumbit(false);

    } 
  };
  

  /* Resets the game back to default */
  const restartGame = () => {
    setShowResults(true);
    setshowanswers(true);
    setCurrentQuestion1(0)
  };

  const showquestions = () => {
    setShowResults(true);
    setshowanswers(true);

    if (currentQuestion1 + 1 < questions.length) {
      setCurrentQuestion1(currentQuestion1 + 1);
    } else {
      setShowResults(true);
      setshowanswers(false) ;
    }          
  };

  const showw = () => {
    console.log(correctq)
    console.log(chosenquestion)
    
    for (var i =0 , j = 0; i<correctq.length ; i++ ){
      if (correctq[i] === chosenquestion[i]) {
        j++;
      }
    
      console.log(correctq[i] === chosenquestion[i])
    }
    setScore(j);
      setShowResults(true) ;
      setshowsumbit(false);
  };


  const checkcorrect = (isCorrect , x) => {
    if (isCorrect) {
      correctq[currentQuestion] = x;
    }
  };

  const correct = (isCorrect , x) => {
    if (isCorrect) {
      correctq[currentQuestion1] = x;
    return (
      <div
      className="correct"
      style={{
        display: correctanswer ? '' : 'none',
      }}>
      <h1>The Correct Answer was : {x}</h1>
    </div>
    )};
  };

  const chosenanswer = () => {
    return (
      <div
      className="correct"
      style={{
        display: correctanswer ? '' : 'none',
      }}>
      <h1>your Answer was : {chosenquestion[currentQuestion1]}</h1>
    </div>
    );
  };






  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>  Qiuz Course  "{courseid}"</h1>

      {/* 2. Current Score  */}

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Show answers</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion]?.text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion]?.options.map((option) => {

              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect , option.text)}
                  
                >
                  {checkcorrect(option.isCorrect , option.text)}
                  {option.text}

                  
                </li>



              );
              
             
            }
            
            
            )
            
     
            }
             <div>   <text>  your Answer is : {chosenquestion[currentQuestion]}  </text>
               <br>
             </br>
              <button onClick={() => perviousquestion()}>previous Question </button>
               <button1 onClick={() => nextquestion()}>Next Question </button1>
              <br>
             </br>
              {showsumbit && <button2 onClick={() => showw()}> Submit </button2>}

  </div>

          </ul>
         
        </div>
      )
      
      
      
      
      }

      { showanswers &&(
  <div className="question-card">
  {/* Current Question  */}
  <h2>
    Question: {currentQuestion1 + 1} out of {questions.length}
  </h2>
  <h3 className="question-text">{questions[currentQuestion1]?.text}</h3>

  {/* List of possible answers  */}
  <ul>
    {questions[currentQuestion1]?.options.map((option) => {
      return (
        <li
          key={option.id}
        >
          {option.text}

        </li>
        

      );

    })}

    

  </ul>


  {questions[currentQuestion1]?.options.map((option) => {
      return (
        <text
        >
          {correct(option.isCorrect ,option.text)}

        </text>
        

      );

    }
   

    )}
    
    {chosenanswer()}
    
    

  <button onClick={() => showquestions()}>next question</button>

</div>


      )
      }



    </div>
  );
  }
export default UseropenregisteredCourses;