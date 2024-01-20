import React, { useEffect, useState } from "react";
import QuizData from "./QuizData.json";

export const ChoicesList = ({ index, onHandleChoice }) => {
  

  const questionId = QuizData.questions[index].id;




  return (
    <ul className="choices">
      {QuizData.questions[index].options.map((option, index) => (
        <li key={`${questionId}-${QuizData.questions[index].id}`}>
          <button value={option} onClick={() => onHandleChoice(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
};
