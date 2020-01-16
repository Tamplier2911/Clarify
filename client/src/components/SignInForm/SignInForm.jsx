// import "./SignInForm.scss";
import React, { useState } from "react";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import { connect } from "react-redux";
import { logUserInStart } from "../../redux/auth/auth-actions";

// JS Rendering CSS
import {
  SignInFormContainer,
  SignInFormTitle,
  SignInFormForm
} from "./SignInFormStyles";

const SignInForm = ({ logUserInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const onInputChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    logUserInStart(userCredentials);
  };

  //  email: "test@examile.com",
  //  password: "test1234"

  return (
    <SignInFormContainer>
      <SignInFormTitle>I already have an account:</SignInFormTitle>
      <SignInFormForm onSubmit={e => onFormSubmit(e)}>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={email}
          label="Email"
          name="email"
          type="email"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={password}
          label="Password"
          name="password"
          type="password"
          required
        />
        <Button type="submit" description="Sign In" />
      </SignInFormForm>
    </SignInFormContainer>
  );
};

export default connect(null, { logUserInStart })(SignInForm);
