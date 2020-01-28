// import "./SignUpForm.scss";
import React, { useState } from "react";

import { connect } from "react-redux";
import { signUserUpStart } from "../../redux/auth/auth-actions";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  SignUpFormContainer,
  SignUpFormTitle,
  SignUpFormForm
} from "./SignUpFormStyles";

const SignUpForm = ({ signUserUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });
  const { name, email, password, passwordConfirm } = userCredentials;

  const onInputChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    if (password === passwordConfirm) {
      await signUserUpStart(userCredentials);
    } else {
      alert("Confirmed Password must be matching original.");
    }
  };

  // name: "user",
  // email: "test@examile.com",
  // password: "test1234",
  // passwordConfirm: "test1234"

  return (
    <SignUpFormContainer>
      <SignUpFormTitle>I want to register new account:</SignUpFormTitle>
      <SignUpFormForm onSubmit={e => onFormSubmit(e)}>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={name}
          label="Name"
          name="name"
          type="text"
          required
        />
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
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={passwordConfirm}
          label="Confirm Password"
          name="passwordConfirm"
          type="password"
          required
        />
        <Button type="submit" description="Sign Up" />
      </SignUpFormForm>
    </SignUpFormContainer>
  );
};

export default connect(null, { signUserUpStart })(SignUpForm);
