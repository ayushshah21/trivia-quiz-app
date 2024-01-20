import React, { useEffect, useState } from "react";
import { ChoicesList } from "./ChoicesList";
import { DisplayQuestion } from "./DisplayQuestion";
import QuizData from "./QuizData.json";
import { Correct } from "./Correct";
import { Incorrect } from "./Incorrect";
import { Streak } from "./Streak";

export const Game = () => {
  const [index, setIndex] = useState(-1);
  const [choice, setChoice] = useState('');
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(null);
  const [streak, setStreak] = useState(0);


  function handleChoice(option){
    setChoice(option);
    if(QuizData.questions[index].correct_answer === option){
        setCorrect(true);
    }
    else{
        setIncorrect(true);
    }
  }

  function handleNextQuestion(){
    if(correct){
        setStreak((streak) => streak + 1);
        setIndex((index) => index === 24 ? 0: index + 1);
    }
    else{
        setStreak(0);
        setIndex((index) => index === 24 ? 0: index + 1);
    }
    setCorrect(false);
    setIncorrect(null);
  }


  useEffect(() => {
    const getRandomNumber = (low, high) => {
      return Math.floor(Math.random() * (high - low + 1)) + low;
    };
    const questionNum = getRandomNumber(0, QuizData.questions.length - 1);
    setIndex(questionNum);
  }, []);
  if (index === -1) {
    return <div>Loading...</div>;
  }
  return (
    <div className="game">
        <Streak streak={streak}/>
      <DisplayQuestion index={index} />
      <ChoicesList index={index} onHandleChoice={handleChoice} />
      {correct? <Correct onNextQuestion={handleNextQuestion} />: ""}
      {incorrect ? <Incorrect onNextQuestion={handleNextQuestion} />: ''}
    </div>
  );
};
