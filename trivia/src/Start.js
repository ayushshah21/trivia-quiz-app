import React, { useState } from 'react'
import './index.css';

export const Start = ({onButtonClicked}) => {

  return (
    <div className="button">
        <button onClick={() => onButtonClicked(true)}>Start Trivia!</button>
        <img src={`${process.env.PUBLIC_URL}/Trivia_Crack_logo.png`} alt="Trivia Crack Logo" />
    </div>
  )
}
