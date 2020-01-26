// import "./WithSpinner.scss";
import React from "react";

// JS Rendering CSS
import { SpinnerContainer, SpinnerCircle } from "./WithSpinnerStyles";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
