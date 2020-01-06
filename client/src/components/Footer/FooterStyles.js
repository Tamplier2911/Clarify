import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-column: 2 / 3;
  background-color: #fdfdfd;

  font-size: 1.2rem;
  padding: 2rem;

  @media only screen and (max-width: 48em) {
    grid-column: 1 / 3;
  }
`;
