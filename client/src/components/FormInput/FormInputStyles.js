import styled, { css } from "styled-components";

const shrink = css`
  top: -1rem;
  font-size: 1.35rem;
  color: #d56363;
`;

const ShrinkOnInput = props => {
  return props.inputlength ? shrink : null;
};

export const FormInputContainer = styled.div`
  position: relative;
  grid-column: 1/-1;
`;
// INPUT DIV WITH GROWING BAR ~ REQIRE TESTING
export const FormInputFillingBar = styled.div`
  position: relative;
  width: 100%;
  height: 0.2rem;
  background-color: #dededf;

  &::after {
    content: "";
    display: inline-block;
    width: 0%;
    height: 0.2rem;
    background-color: #d56363;

    position: absolute;
    top: 0;
    left: 0;

    transition: width 0.5s;
  }
`;

export const FormInputBar = styled.input`
  color: #d56363;
  font-family: var(--font-text);
  font-size: 1.8rem;
  letter-spacing: 0.1rem;

  width: 100%;
  padding: 1rem 1rem 1rem 0rem;
  background-color: var(--white);
  border: none;
  // border-bottom: 0.2rem solid #f09999; /*******ADD THIS*********/

  transition: border 0.3s;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    // -webkit-box-shadow: 0 0 0 30px #f3f3f3 inset !important;
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: #d56363 !important;
  }

  &::-moz-focus-inner {
    border: 0;
    outline: none;
  }

  &:focus {
    outline: none;
    // border-bottom: 0.2rem solid #d56363; /*******ADD THIS*********/
  }

  &:focus ~ ${FormInputFillingBar}::after {
    width: 100%; /*******REMOVE THIS*********/
  }

  &:focus ~ label {
    ${shrink}
  }

  &:invalid {
    box-shadow: none;
  }
`;

export const FormInputLabel = styled.label`
  position: absolute;
  color: #f09999;
  font-size: 1.8rem;
  top: 1.5rem;
  left: 0;

  transition: font-size 0.3s, top 0.3s;

  ${ShrinkOnInput}
`;
