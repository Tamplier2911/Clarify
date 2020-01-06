import styled from "styled-components";

export const AppContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 1 / -1;

  display: grid;
  grid-template-columns: 28rem 1fr;
  grid-template-rows: min-content 1fr min-content;

  border-radius: 0.4rem;
  margin: 4rem 0rem;
  overflow: hidden;

  box-shadow: 0 2rem 4rem #00000031;

  @media only screen and (max-width: 48em) {
    grid-template-columns: 1fr;
  }
`;

export const AppMain = styled.main`
  grid-column: 2 / 3;
  background-color: #fdfdfd;

  min-height: 84vh;
  //   padding: 2rem;

  @media only screen and (max-width: 48em) {
    grid-column: 1 / 3;
  }
`;
