import React from "react";

export const Correct = ({onNextQuestion}) => {
  return (
    <div className="correct">
      <h1>✅ Congrats, You are Correct! ✅</h1>
      <button onClick={onNextQuestion} className="next">Next Question</button>
    </div>
  );
};
