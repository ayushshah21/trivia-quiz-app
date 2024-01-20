import React, { useEffect, useState } from 'react'
import { DisplayChoices } from './DisplayChoices'
import { DisplayQuestion } from './DisplayQuestion'

export const Game = () => {
    const [question, setQuestion] = useState([]);

    useEffect(() =>{
        async function fetchQuestions(){
            const response = await fetch('https://opentdb.com/api.php?amount=23');
            const data = await response.json();
            console.log(data);
        }
        fetchQuestions();
    }, [])


  return (
    <div className='game'>
        <DisplayQuestion />
        <DisplayChoices />

    </div>
  )
}
