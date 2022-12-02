import React from "react";
import ResponseInput from "./ResponeInput";
const Questions = ({ question, title, type , id , change}) => {
  return (
    <div className="qu_container">
      <div className="questiontitle">{title}</div>
      <div className="list_question">{question}</div>
      <div className="res">
        <ResponseInput type={type} id={id } change={change}/>
      </div>
    </div>
  );
};

export default Questions;
