// import "./TextInput.scss";
import React from "react";

// JS Rendering CSS
import { TextInputContainer, TextInputArea } from "./TextInputStyles";

const TextInput = ({ onInputChange, value, max, ...otherProps }) => {
  return (
    <TextInputContainer>
      <TextInputArea
        className="textInput__area"
        onChange={onInputChange}
        {...otherProps}
        defaultValue={value}
        maxLength={max}
      />
    </TextInputContainer>
  );
};

export default TextInput;
