import React, {useState} from "react";
import styles from './Qcard.module.css';


function QCard(props){
  return(
    <div className={styles.Qcardcontainer}>
    <div className={styles.Qcard}>
      <div className={styles.question}>
        <h4> <span className={styles.ques}>Question {props.num}:</span>  {props.question}</h4>
        <p className={styles.ans}>{props.answer}</p>
      </div>
    </div>
  </div>
  );}

  export default QCard;