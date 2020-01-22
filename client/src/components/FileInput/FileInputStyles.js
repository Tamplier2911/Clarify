import styled from "styled-components";

export const FileInputContainer = styled.div`
  position: relative;
  grid-column: 1/-1;
`;

export const FileInputInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  display: grid;
  text-align: center;
  color: #fff;
  background-color: #f09999;
  border: 0.1rem #f09999 solid;
  border-radius: 2rem;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #f09999;
    background-color: #fff;
    border: 0.1rem #f09999 solid;
  }
`;
