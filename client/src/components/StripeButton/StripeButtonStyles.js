import styled, { css } from "styled-components";
import StripeCheckout from "react-stripe-checkout";

const StripeButtonAndStripeHiddenDivStyles = css`
  cursor: pointer !important;
  font-family: var(--font-text) !important;

  white-space: nowrap !important;
  border: 0.1rem solid transparent !important;
  border-radius: 2rem !important;

  background-image: none !important;
  box-shadow: 0 0.2rem 0.4rem #00000027 !important;
  color: transparent !important;

  color: #fff !important;
  background-color: #f09999 !important;

  transition: color 0.3s, background-color 0.3s !important;
`;

export const StripeCheckoutButton = styled(StripeCheckout)`
  ${StripeButtonAndStripeHiddenDivStyles}

  align-self: center;
  display: grid !important;
  border: 0.1rem solid #f09999 !important;

  &:hover {
    background-color: #fff !important;
  }

  &:focus {
    outline: none !important;
  }

  &:hover span {
    color: #f09999 !important;
    background-color: #fff !important;
  }

  & span {
    ${StripeButtonAndStripeHiddenDivStyles}
    font-size: 1.6rem !important;
    font-weight: 400 !important

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    height: 100% !important;
    line-height: normal !important;

    padding: 1.2rem !important;
  }
`;
