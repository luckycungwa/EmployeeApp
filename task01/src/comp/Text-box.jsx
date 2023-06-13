import React from "react";
import { useState } from "react";

function Textbox() {
  const [inputValue, setInputValue] = useState("");

  const CheckInput = (event) => {
    // create state event to handle changes
    setInputValue(event.target.value);
    //calling the newInput value to check if its state has changed its currrent value (event.target.value)
    //
  };

  return (
    <div className="right">
      <input
        type="text"
        placeholder="Input Text here..."
        onChange={CheckInput}
        value={inputValue}
      ></input>
      </div>
  );
}

export default Textbox;
