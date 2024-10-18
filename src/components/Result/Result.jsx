// src/components/Result.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button  from '../Button/Button';
import styles from './Result.module.css'
import Option from '../../Includes/Option/Option';
import GaugeChart from 'react-gauge-chart'


const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  const restartQuiz = () => {
    
    navigate('/');
  };

  const con = () =>{
    console.log(score);
  }


  return (
    // <div className="result-page">
    //   <h1>Your Score</h1>
    //   <p>
    //     You scored {score} out of {total}
    //   </p>
    //   <button onClick={restartQuiz}>Restart Quiz</button>
    // </div>

    
  <div className={`${styles.question_page}`}>
  {con()}
  {/* Style Header */}
  <div className={`${styles.header_container}`}>
    <img src='images/upper_header.svg' alt='upperHeaderImage'></img>
  </div>

  <div className={`${styles.question_module}`}>
 

    {/* Result */}

    <div className={`${styles.question_box}`}>
          <p> Your Score</p>
    </div>
        
          <GaugeChart id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={['#5BE12C', '#F5CD19', '#EA4228']}
        percent={(score / total)}
        textColor={'#000'}
        arcPadding={0.02}
      />
    
    <Option isCorrect={true}
     text={`${score} Correct`}
     />

    <Option isCorrect={false}
      text={`${total-score} Incorrect`}
    />

    

    <div className={`${styles.button_container}`}  
     onClick={restartQuiz} >
        <Button text={"Start Again"} isSubmit={false} /> 
    </div>  
  </div>
</div>

  );

};

export default Result;
