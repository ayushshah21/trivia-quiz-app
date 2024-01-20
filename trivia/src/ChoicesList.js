import React, { useEffect, useState } from "react";
import QuizData from "./QuizData.json";

export const ChoicesList = ({ index }) => {
  const [choice, setChoice] = useState('');
  
  const questionId = QuizData.questions[index].id;

  function handleChoice(e){
    setChoice(e.target.value);
    if(choice === QuizData.questions[index].correct_answer){
      console.log('correct');
    }
  }


  return (
    <ul className="choices">
      {QuizData.questions[index].options.map((option, index) => (
        <li key={`${questionId}-${QuizData.questions[index].id}`}>
          <button value={option} onClick={handleChoice}>{option}</button>
        </li>
      ))}
    </ul>
  );
};
