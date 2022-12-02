import React,{useState} from "react";
import CommonButton from './Buttons/CommonButton';
import Input from './Input';

const ResponseInput = ({type}) => {
    if(type === "oui/non") {
        return <div className="response_d" >
            <CommonButton title={"Oui"} />
            <CommonButton title={"Non"} />
        </div>
    }
    if(type === "input") {
        return <div className="response_in" >
            <Input/>
        </div>
    }
    return (
        <>
        </>
    )
}

export default ResponseInput;