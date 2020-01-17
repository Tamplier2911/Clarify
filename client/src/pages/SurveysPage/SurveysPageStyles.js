import styled from "styled-components";

export const SurveyPageContainer = styled.div`
  display: grid;
  align-content: start;
  grid-row-gap: 2rem;
  min-height: 84vh;
  // min-height: 70vh;

  padding: 2rem;
  background-color: #f3f3f3;
`;

export const SurveyPageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const SurveyPageCampaigns = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  background-color: #f3f3f3;

  @media only screen and (max-width: 26.563em) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  }
`;
