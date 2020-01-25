import styled from "styled-components";

export const TextInputContainer = styled.div`
  position: relative;
  grid-column: 1/-1;
`;

export const TextInputArea = styled.textarea`
  display: grid;
  width: 100%;
  resize: none;
  border-color: #f09999;
  color: #d56363;

  &:focus {
    outline: 0.1rem #d56363 solid;
  }
`;
