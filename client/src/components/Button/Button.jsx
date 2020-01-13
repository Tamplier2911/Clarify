// import "./Button.scss";
import React from "react";

// JS rendering CSS
import { ButtonContainer, ButtonBig } from "./ButtonStyles";

const Button = ({ type, description }) => {
  return (
    <ButtonContainer>
      <ButtonBig type={type}>{description}</ButtonBig>
    </ButtonContainer>
  );
};

export default Button;
