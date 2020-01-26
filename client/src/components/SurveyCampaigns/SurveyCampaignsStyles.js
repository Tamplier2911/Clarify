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
