import React from 'react'

export const Incorrect = ({onNextQuestion}) => {
  return (
    <div className="incorrect">
    <h1>🙅‍♂️ Sorry, Wrong Answer! 🙅‍♂️</h1>
    <button onClick={onNextQuestion} className="restart">Restart</button>
  </div>
  )
}
