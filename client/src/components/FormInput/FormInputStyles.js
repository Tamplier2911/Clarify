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

export const FormInputBar = styled.input`
  color: #d56363;
  font-family: var(--font-text);
  font-size: 1.8rem;
  letter-spacing: 0.1rem;

  width: 100%;
  padding: 1rem 1rem 1rem 0rem;
  background-color: var(--white);
  border: none;
  border-bottom: 0.2rem solid #f09999;

  transition: border 0.3s;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  &::-moz-focus-inner {
    border: 0;
    outline: none;
  }

  &:focus {
    outline: none;
    border-bottom: 0.2rem solid #d56363;
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
