import React from "react";
import ResponseInput from "./ResponeInput";
const Questions = ({ question, title , type }) => {
  return (
    <div className="qu_container">
      <div className="questiontitle"><b>{title}</b></div>
      <div className="list_question"><p>{question}</p></div>
      <div className="res">
        <ResponseInput type={type} />
      </div>
    </div>
  );
};

export default Questions;
