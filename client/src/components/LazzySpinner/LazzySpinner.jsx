import React from "react";

// JS Rendering CSS
import { SpinnerContainer, SpinnerCircle } from "./LazzySpinnerStyles";

const LazzySpinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  );
};

export default LazzySpinner;
