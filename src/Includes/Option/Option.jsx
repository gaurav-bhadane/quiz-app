import React from 'react'
import styles from "./Option.module.css"
const Option = ({isCorrect,text}) => {
  return (
    <div
    className={`${styles.option_res}  ${isCorrect ? styles.option_correct_option : styles.option_incorrect_option}`}
    >
        <p>{text}</p>
    </div>
  )
}

export default Option
