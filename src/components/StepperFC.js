import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const StepperFC = ({ currentQuestion, currentQuestionID }) => {
  var response = useSelector((state) => state.quizz.response);
  var isCorrect = (index) => {
    var res = response.find((r) => r.id == currentQuestion[index].id);
    if (!res) return false;
    if (res.response == currentQuestion[index].response) return true;
    else return false;
  };
  console.log(currentQuestionID)
  return (
    <div className="stepper">
      <div
        className={
          currentQuestionID < 1 ? "notDone" : isCorrect(0) ? "correct" : "wrong"
        }
      ></div>
      <div
        className={
          currentQuestionID < 2 ? "notDone" : isCorrect(1) ? "correct" : "wrong"
        }
      ></div>
      <div
        className={
          currentQuestionID < 3 ? "notDone" : isCorrect(2) ? "correct" : "wrong"
        }
      ></div>
      <div
        className={
          currentQuestionID < 4 ? "notDone" : isCorrect(3) ? "correct" : "wrong"
        }
      ></div>
      <div
        className={
          currentQuestionID < 5 ? "notDone" : isCorrect(4) ? "correct" : "wrong"
        }
      ></div>
      <div
        className={
          currentQuestionID < 6 ? "notDone" : isCorrect(5) ? "correct" : "wrong"
        }
      ></div>
    </div>
  );
};

export default StepperFC;
