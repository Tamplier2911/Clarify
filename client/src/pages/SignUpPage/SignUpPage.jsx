import "./SignUpPage.scss";
import React from "react";

// JS Rendering CSS
import { SignUpPageContainer } from "./SignUpPageStyles";

import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <SignInForm />
      <SignUpForm />
    </SignUpPageContainer>
  );
};

export default SignUpPage;
