import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExerciseQuestions({ match }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/exercise/${match.params.exerciseId}`)
      .then((res) => {
        setQuestions(res.data.questions);
      })
      .catch((err) => console.log(err));
  }, [match.params.exerciseId]);

  return (
    <div>
      <h1>Exercise Questions</h1>
      {questions.map((question) => (
        <div key={question._id}>
          <p>Question: {question.question}</p>
          <p>Correct Answer: {question.correctAnswer}</p>
          <p>Your Answer: {question.userAnswer}</p>
        </div>
      ))}
    </div>
  );
}

export default ExerciseQuestions;
