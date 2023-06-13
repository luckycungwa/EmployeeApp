import React from "react";
import {useState} from 'react';

function Form() {
const [inputValue, setInputValue] = useState("");
const [option, setOption] = useState("Select Option");

const CheckInput = (event) => {
// create state event to handle changes
setInputValue(event.target.value);
//calling the newInput value to check if its state has changed its currrent value (event.target.value)
//
};
const CheckOption = (event) => {
    //
    setOption(event.target.value);
}

    return(
        // Using States

        // Create form elements
        <>
            {/* INPUT ELEMENTS */}
            <input type="text" placeholder="John" onChange={CheckInput} value={inputValue}></input>
            <input type="text" placeholder="Doe"></input>
            <br/>
            <input type="text" placeholder="user@email.com"></input>
            {/* OPTION ELEMENTS */}
            <select className="options" onSelect={CheckOption} value={option}>
            <option >MOVIES</option>
            <option>Horror</option>
            <option>Comedy</option>
            </select>
            <br/>
            <button className="cta-btn">Subscribe Now</button>

            <p className="wrapText"> {inputValue} & your Option was: {option}</p> 
        </>
    );

}

export default Form;