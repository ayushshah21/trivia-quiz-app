import React from 'react'
import QuizData from "./QuizData.json";

export const DisplayQuestion = ({index}) => {
  return (
    <div className='display-question'>
        <h1>{QuizData.questions[index].question}</h1>
    </div>
  )
}
