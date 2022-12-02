import React, { useState } from "react";
import CommonButton from "./Buttons/CommonButton";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { setResponse } from "../store/quiz/actions";
const ResponseInput = ({ type, id , change }) => {
  var dispatch = useDispatch();
  if (type === "oui/non") {
    return (
      <div className="response_d">
        <CommonButton
          onClick={() => {
            dispatch(setResponse({response : "oui" , id}));
            change()
          }}
          title={"Oui"}
          content={true}
        />
        <CommonButton
          onClick={() => {
            dispatch(setResponse({response : "non" , id}));
            change()
          }}
          content={false}
          title={"Non"}
        />
      </div>
    );
  }
  if (type === "input") {
    return (
      <div className="response_in">
        <Input />
      </div>
    );
  }
  return <></>;
};

export default ResponseInput;
