import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: grid;
`;

export const ButtonBig = styled.button`
  cursor: pointer;
  height: 5rem;
  border: 0.1rem #f09999 solid;
  border-radius: 2rem;
  background-color: #f09999;
  color: #fff;
  font-family: var(--font-text);
  font-size: 1.6rem;
  box-shadow: 0 0.2rem 0.4rem #00000027;
  transition: color 0.3s, background-color 0.3s;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #f09999;
  }
`;
