import React from 'react'
import styles from "./Button.module.css"
const button = ({ text, isSubmit}) => {
  return (
    <button className={`${styles.start_button}`} >
      {text}
    </button>
  )
}

export default button
