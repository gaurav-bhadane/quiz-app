// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Home.module.css"
import Button from "../Button/Button"

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/question');
  };

  return (
    <div className="application-container">  
  <div className={`${styles.header_container}`} >  
    <img src="images/logo.png" alt="Header Image" />  
  </div>

  <div className={`${styles.quiz_container}`} >
      <img src="images/Quiz.svg" alt="Quiz Image" />  
  </div>  
    
  <div className={`${styles.button_container}`} onClick={startQuiz}>  
    <Button text={"Start"} isSubmit={true} /> 
  </div>  
 </div> 
  );

};

export default Home;
