import React, { useState } from 'react';
import "./multipleChoiceExercise.css";
function MultipleChoiceExercise() {
  // Declare state variables to store the selected answer and the correct answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  //const [correctAnswer, setCorrectAnswer] = useState('B');
  const [correctAnswer, ] = useState('B');
  // Declare a function to handle the user's submission
  const handleSubmit = () => {
    // Calculate the user's grade based on their selected answer
    let grade;
    if (selectedAnswer === correctAnswer) {
      grade = 'Correct';
    } else {
      grade = 'Incorrect';
    }

    // Display the correct answer and the user's grade
    alert(`The correct answer is ${correctAnswer}. Your grade is ${grade}.`);
  };

  return (
    <div className="MultipleChoiceExercise">
      <h1>Multiple Choice Exercise</h1>
      <p>Which of the following is the correct answer?</p>
      <form>
        <label>
          <input type="radio" name="answer" value="A" onChange={(e) => setSelectedAnswer(e.target.value)} />
          A
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="B" onChange={(e) => setSelectedAnswer(e.target.value)} />
          B
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="C" onChange={(e) => setSelectedAnswer(e.target.value)} />
          C
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="D" onChange={(e) => setSelectedAnswer(e.target.value)} />
          D
        </label>
        <br />
        {"\n"}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default MultipleChoiceExercise;
