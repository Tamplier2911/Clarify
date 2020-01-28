import styled from "styled-components";

export const SurveyCampaignsContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  background-color: #f3f3f3;

  @media only screen and (max-width: 26.563em) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  }
`;

export const SurveyCampaignContainerBackup = styled.div`
  display: grid;
  min-height: 62vh;
  align-content: center;
  justify-content: center;
`;

export const SurveyCampaignNotYet = styled.div`
  // justify-self: center;
  font-size: 1.8rem;
`;
