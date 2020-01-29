import styled from "styled-components";
import { ReactComponent as NoConnection } from "../../assets/svg/no-connection.svg";

export const ErrorBoundaryContainer = styled.div`
  display: grid;
  -webkit-align-content: center;
  -ms-flex-line-pack: start;
  align-content: center;
  justify-items: center;
  grid-row-gap: 2rem;
  min-height: 84vh;
  padding: 2rem;
  background-color: #f3f3f3;
`;

export const ErrorBoundaryText = styled.div`
  font-size: 2rem;
  color: #fd907e;
`;

export const ErrorBoundarySVG = styled(NoConnection)`
  width: 20rem;
  height: 20rem;

  @media only screen and (max-width: 450px) {
    width: 10rem;
    height: 10rem;
  }
`;
