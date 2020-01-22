// import "./FileInput.scss";
import React from "react";

// JS Rendering CSS
import {
  FileInputContainer,
  FileInputInput,
  FileInputLabel
} from "./FileInputStyles";

const FileInput = ({ onInputChange, label, id, ...otherProps }) => {
  return (
    <FileInputContainer>
      <FileInputInput onChange={onInputChange} id={id} {...otherProps} />
      {label ? (
        <FileInputLabel className="fileInput__label" htmlFor={id}>
          {label}
        </FileInputLabel>
      ) : null}
    </FileInputContainer>
  );
};

export default FileInput;
