import React, { useState, useEffect } from 'react';
import Question from './Question/Question';

const QuestionWithImage = () => {
  const [questions, setQuestions] = useState([]);

  // Fetch the questions here, directly from the server or hardcoded
  useEffect(() => {
    fetch('http://localhost:5000/api/quiz')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error fetching quiz data:', error));
  }, []);

  return (
    <div>
      {questions.length > 0 ? (
        <Question questions={questions} />
      ) : (
        <div>Loading questions...</div>
      )}
    </div>
  );
};

export default QuestionWithImage;
