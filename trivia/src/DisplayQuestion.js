import React from 'react'
import QuizData from "./QuizData.json";

export const DisplayQuestion = ({index}) => {
    console.log(index);
  return (
    <div className='display-question'>
        <h1>{QuizData.questions[index].question}</h1>
        <img src={`${process.env.PUBLIC_URL}/${QuizData.questions[index].imgSrc}`} alt="Trivia Crack Logo" />
        
    </div>
  )
}
