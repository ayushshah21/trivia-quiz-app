import React, { useEffect, useState } from "react";
import { ChoicesList } from "./ChoicesList";
import { DisplayQuestion } from "./DisplayQuestion";
import QuizData from "./QuizData.json";

export const Game = () => {
  const [question, setQuestion] = useState(-1);

  useEffect(() => {
    const getRandomNumber = (low, high) => {
      return Math.floor(Math.random() * (high - low + 1)) + low;
    };
    const questionNum = getRandomNumber(0, QuizData.questions.length - 1);
    setQuestion(questionNum);
  }, []);
  if (question === -1) {
    return <div>Loading...</div>;
  }
  return (
    <div className="game">
      <DisplayQuestion index={question} />
      <ChoicesList index={question} />
    </div>
  );
};
