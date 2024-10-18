// src/components/Question.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '../../Includes/CircularBar/CircularBar';
import Button from "../Button/Button";
import './checkBoxstyles.css';
import styles from "./Question.module.css";

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const questions = [
    {
      questionText: 'What is the capital city of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      answers: ['Paris'],
    },
    {
      questionText: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answers: ['Mars'],
    },
    {
      questionText: 'Who wrote the national anthem of India, "Jana Gana Mana"?',
      options: ['Mahatma Gandhi', 'Rabindranath Tagore', 'Subhas Chandra Bose', 'Jawaharlal Nehru'],
      answers: ['Rabindranath Tagore'],
    },
    {
      questionText: 'What is the chemical symbol for water?',
      options: ['CO₂', 'O₂', 'H₂O', 'H₂SO₄'],
      answers: ['H₂O'],
    },
    {
      questionText: 'Who was the first person to walk on the moon?',
      options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'John Glenn'],
      answers: ['Neil Armstrong'],
    }
  ];
  
  

  const handleOptionChange = (option) => {
    setSelectedAnswers((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((selected) => selected !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };
  

  const handleNextQuestion = () => {
    const correctAnswers = questions[currentQuestionIndex].answers;
    const isCorrect = selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every((answer) => correctAnswers.includes(answer));
  
    if (isCorrect) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
  
        if (currentQuestionIndex + 1 === questions.length) {
          navigate('/result', { state: { score: newScore, total: questions.length } });
        }
  
        return newScore;
      });
    }
  
    // Move to the next question
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswers([]); // Reset for the next question
    } else if (!isCorrect) {
      navigate('/result', { state: { score, total: questions.length } });
    }
  };
  
  

  return (
    <div className={`${styles.question_page}`}>

        {/* Style Header */}
        <div className={`${styles.header_container}`}>
          <img src='images/upper_header.svg' alt='upperHeaderImage'></img>
        </div>
      {/* Question Progress Bar */}
        <div className={`${styles.question_module}`}>

            <div className={`${styles.question_index}`}>  
            <CircularProgress progress={currentQuestionIndex} total={5} />  
        </div>  
      {/* Question */}

          <div className={`${styles.question_box}`}>
          <p>{questions[currentQuestionIndex].questionText}</p>
          </div>

          {/* Image */}
          {/* Image */}
            {questions[currentQuestionIndex].img && (
              <div className={`${styles.Image_selection}`}>
                <img src={questions[currentQuestionIndex].img} alt="Question related" />
              </div>
            )}

          

          {/* Options */}
          <div className={`${styles.options}`}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} className={`${styles.option} `}>
              <input  type="checkbox"
                      id={`option-${index}`}
                          name="option"
                          value={option}
                          checked={selectedAnswers.includes(option)}
                          onChange={() => handleOptionChange(option)}
                        />
                <label htmlFor={`option-${index}`}>{option}</label>

              </div>
          ))}
</div>


          
          <div className={`${styles.button_container}`}  
           onClick={handleNextQuestion} 
           disabled={!selectedAnswer}>


              <Button text={"Next"} isSubmit={false} /> 
          </div>  

        </div>
      
    </div>
  );
};

export default Question;
