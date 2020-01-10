// import "./Survey.scss";
import React from "react";

// JS Rendering CSS
import {
  SurveyContainer,
  SurveyName,
  SurveyDescription,
  SurveyProgress,
  SurveyPercentageStart,
  SurveyPercentageEnd,
  SurveyParticipants
} from "./SurveyStyles";

const Survey = ({ name, description, range, participants }) => {
  return (
    <SurveyContainer>
      <SurveyName>{name}</SurveyName>
      <SurveyDescription>{description}</SurveyDescription>
      <SurveyProgress range={range}>
        <SurveyPercentageStart>{range.start}%</SurveyPercentageStart>
        <SurveyPercentageEnd>{range.end}%</SurveyPercentageEnd>
      </SurveyProgress>
      <SurveyParticipants>
        Number of participants enrolled: {participants}
      </SurveyParticipants>
    </SurveyContainer>
  );
};

export default Survey;
