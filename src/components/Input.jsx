import React,{useState} from "react";

const Input = () => {
    const [value,setValue] = useState("");
    const handleChange = e => {
        setValue(e.target.value);
    }
    return (
        <input className="input" onChange={handleChange} name="value" />
    )
}

export default Input;