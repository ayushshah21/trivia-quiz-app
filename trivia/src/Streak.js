import React from "react";

export const Streak = ({ streak }) => {
  return (
    <div className="streak">
      {streak >= 10 ? (
        <h1>🔥🔥 Streak: {streak} 🔥🔥</h1>
      ) : streak > 0 ? (
        <h1>🔥 Streak: {streak} 🔥</h1>
      ) : (
        <h1> Streak: {streak} </h1>
      )}
    </div>
  );
};
