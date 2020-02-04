import styled from "styled-components";

export const ParticipantPageContainer = styled.div`
  display: grid;
  justify-items: center;
  min-height: 84vh;

  padding: 2rem;
  // background-color: #f3f3f3;
  background-color: #fff;

  color: #704646;
`;

export const ParticipantPageHeading = styled.div`
  font-size: 8rem;
  align-self: center;

  @media only screen and (max-width: 820px) {
    font-size: 7rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 6rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 1.2rem;
  }
`;

export const ParticipantPageMessage = styled.div`
  font-size: 2rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.6rem;
  }
`;

export const ParticipantPageKarma = styled.span`
  color: #704646;
  font-weight: bold;
`;
