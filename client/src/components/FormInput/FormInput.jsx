// import "./FormInput.scss";
import React from "react";

// JS Rendering CSS
import {
  FormInputContainer,
  FormInputBar,
  FormInputFillingBar,
  FormInputLabel
} from "./FormInputStyles";

const FormInput = ({ onInputChange, label, ...otherProps }) => {
  return (
    <FormInputContainer>
      <FormInputBar onChange={onInputChange} {...otherProps} />
      <FormInputFillingBar />
      {label ? (
        <FormInputLabel inputlength={otherProps.value.length}>
          {label}
        </FormInputLabel>
      ) : null}
    </FormInputContainer>
  );
};

export default FormInput;
