import styled, { css } from "styled-components";

const modalWindowAnimation = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  display: grid;
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 999;

  align-content: center;
  justify-content: center;

  background-color: #fde7e7ab;
`;

export const ModalWindow = styled.div`
  display: grid;
  position: relative;

  grid-template-rows: min-content;

  background-color: #fff;
  height: 30vh;
  width: 30vw;

  border-radius: 0.4rem;
  border: 0.1rem solid #df4c4c;

  padding: 2rem;
  overflow: scroll;
  overflow-x: hidden;

  transition: opacity 0.5s;

  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  &::-webkit-scrollbar {
    width: 0.2rem;
    background-color: #2834930c;
    // border-radius: 5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to bottom, #ffcccc, #ff5555);
    border-radius: 5rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #0000004d;
    box-shadow: inset 0 0 6px #0000004d;
  }

  @media only screen and (max-width: 1100px) {
    height: 35vh;
    width: 40vw;
  }

  @media only screen and (max-width: 48em) {
    height: 35vh;
    width: 60vw;
  }

  @media only screen and (max-width: 450px) {
    height: 35vh;
    width: 70vw;
  }

  ${modalWindowAnimation}
`;

export const ModalHeader = styled.h3`
  margin-bottom: 2rem;
`;

export const ModalInfo = styled.div``;

export const ModalClose = styled.div`
  cursor: pointer;
  position: absolute;
  font-size: 1.8rem;
  top: 5%;
  right: 5%;

  transition: 0.3s color;
  &:hover {
    color: #949494;
  }
`;
