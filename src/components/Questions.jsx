import React,{useState} from "react";
import CommonButton from './Buttons/CommonButton';
import Input from "./Input";
import ResponseInput from "./ResponeInput";
const Questions = ({question,title}) => {
  
  
 
    return (
    <div className="qu_container" >
        <div>{title}</div>
       <div className="list_question" >
         {question}
        </div>
        <div className="res" >
            <ResponseInput type={"oui/non"} />
        </div>
        
    </div>  
    )
} 

export default Questions;