import styled from "styled-components";

const getPercentage = ({ range }) => {
  return `grid-template-columns: ${range.start}fr ${range.end}fr`;
};

export const SurveyDescription = styled.div`
  font-size: 1.4rem;
  width: 100%;
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  overflow: scroll;
  overflow-x: hidden;
  max-height: 7rem; // THIS
  // transition: max-height 0.5s ease-out; // THIS

  &::-webkit-scrollbar {
    width: 0.8rem;
    background-color: #2834930c;
    // border-radius: 5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to bottom, #ffcccc, #ff5555);
    border-radius: 5rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #0000004d;
    box-shadow: inset 0 0 6px #0000004d;
  }
`;

export const SurveyContainer = styled.div`
  cursor: pointer;
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr repeat(2, min-content);

  border: 0.1rem #efaaad solid;
  border-radius: 0.4rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 1rem 2rem #0000002f;

  transition: transform 0.2s, height 1s;

  &:hover {
    box-shadow: 0 1rem 3rem #00000038;
    transform: scale(1.02);
  }

  // &:hover ${SurveyDescription} {
  //   white-space: unset;
  //   overflow-y: scroll;
  //   overflow-x: hidden;
  //   max-height: 20rem; // THIS
  //   transition: max-height 1s ease-in; // THIS
  // }
`;

export const SurveyProgress = styled.div`
  display: grid;
  border-radius: 0.4rem;
  overflow: hidden;
  text-align: center;

  // dynamic
  ${getPercentage}
`;

export const SurveyPercentageStart = styled.div`
  background-color: #fd8484;
`;
export const SurveyPercentageEnd = styled.div`
  background-color: #67fdb2;
`;

export const SurveyName = styled.div``;

export const SurveyParticipants = styled.div``;
