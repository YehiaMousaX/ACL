import React, { useEffect, useState } from "react";
import "./UseropenregisteredCourses.css";
import axios from 'axios';

function UseropenregisteredCourses() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setquestions] = useState([]);
    const [courseid, setcourseid] = useState("");

    useEffect(() => {
        axios.post('http://localhost:8000/user/showquestions', {  courseid : "geo" } )
          .then((res) => {
            // Set the questions state with the data from the API call
            
            console.log(res)
            setquestions(res.data[0]);
            setcourseid("geo")
          })
          .catch((err) => console.log(err));
      }, []);
      


  
  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>  Course  "{courseid}"</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
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
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
  }
export default UseropenregisteredCourses;