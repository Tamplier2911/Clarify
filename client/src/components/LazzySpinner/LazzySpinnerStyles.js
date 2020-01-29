import styled, { css } from "styled-components";

const circle = css`
  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 70vh;
`;

export const SpinnerCircle = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: transparent;
  border-radius: 50%;

  -webkit-animation: 1s circle linear infinite;
  animation: 1s circle linear infinite;
  border-right: 0.5rem solid transparent;
  border-top: 0.5rem #f09999 solid;

  display: flex;
  align-items: center;
  justify-content: center;

  ${circle}
`;
