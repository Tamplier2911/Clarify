import styled, { css } from "styled-components";

const textColor = css`
  color: #f08080;
`;

const feedStyle = css`
  border-radius: 0.4rem;
  padding: 0.2rem 0.6rem;
  font-size: 1.4rem;
`;

const generatePositiveStatistics = props => {
  if (props.posPercent === 0) {
    return `
      ${feedStyle}
      background-image: linear-gradient(
      60deg,
      #67fdb2 0%,
      #67fdb2 50%,
      transparent 50%,
      transparent 100%);
      `;
  }
  return `
            ${feedStyle}
            background-image: linear-gradient(
            60deg,
            #67fdb2 0%,
            #67fdb2 ${props.posPercent}%,
            transparent ${props.posPercent}%,
            transparent 100%);
        `;
};

const generateNegativeStatistics = props => {
  if (props.negPercent === 0) {
    return `
      ${feedStyle}
      background-image: linear-gradient(
      60deg,
      #fd8484 0%,
      #fd8484 50%,
      transparent 50%,
      transparent 100%);
      `;
  }
  return `
            ${feedStyle}
            background-image: linear-gradient(
            60deg,
            #fd8484 0%,
            #fd8484 ${props.negPercent}%,
            transparent ${props.negPercent}%,
            transparent 100%);
        `;
};

export const SingleSurveyContainer = styled.div`
  display: grid;
  align-content: start;
  grid-row-gap: 4rem;
  min-height: 84vh;
  // min-height: 70vh;

  padding: 2rem;
  background-color: #f3f3f3;
`;

export const SingleSurveyDescription = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;

export const SingleSurveyName = styled.div`
  font-size: 2.2rem;
`;

export const SingleSurveyDesc = styled.div`
  font-size: 1.8rem;
`;

export const SingleSurveyData = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

export const SingleSurveyText = styled.span`
  color: #333;
`;

export const SingleSurveyBody = styled.div`
  ${textColor}
`;

export const SingleSurveyNegative = styled.div`
  ${generateNegativeStatistics}
`;

export const SingleSurveyPositive = styled.div`
  ${generatePositiveStatistics}
`;

export const SingleSurveyTotal = styled.div`
  ${textColor}
`;

export const SingleSurveyDate = styled.div`
  ${textColor}
`;
