import styled from "styled-components";

export const CreateSurveyPageContainer = styled.div`
  display: grid;
  align-content: start;
  grid-row-gap: 8rem;
  min-height: 84vh;
  // min-height: 70vh;

  padding: 2rem;
  // background-color: #f3f3f3;
  background-color: #fff;
`;

export const CreateSurveyPageFormWrapper = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;

export const CreateSurveyPageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const CreateSurveyCreditWrapper = styled.div`
  display: grid;
  grid-row-gap: 3rem;
`;

export const CreateSurveyPageDescriptor = styled.span`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
`;

export const CreateSurveyPageBulletPoint = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: #f09999;
  margin-right: 0.5rem;
`;

export const CreateSurveyPageCard = styled.p`
  grid-column: 2/-1;
`;
