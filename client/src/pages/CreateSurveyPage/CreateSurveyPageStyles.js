import styled from "styled-components";

export const CreateSurveyPageContainer = styled.div`
  display: grid;
  align-content: start;
  grid-row-gap: 8rem;
  min-height: 84vh;
  // min-height: 70vh;

  padding: 2rem;
  background-color: #f3f3f3;
`;

export const CreateSurveyFormWrapper = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;

export const CreateSurveyForm = styled.form`
  display: grid;
  grid-row-gap: 4rem;
`;

export const CreateSurveyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const CreateSurveyCreditWrapper = styled.div`
  display: grid;
  grid-row-gap: 3rem;
`;

export const CreateSurveyDescriptor = styled.span`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
`;

export const CreateSurveyBulletPoint = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: #f09999;
  margin-right: 0.5rem;
`;
