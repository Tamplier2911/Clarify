// import "./Survey.scss";
import React from "react";

// JS Rendering CSS
import {
  SurveyContainer,
  SurveyName,
  SurveyDescription,
  SurveyStartingDate,
  SurveyProgress,
  SurveyPercentageStart,
  SurveyPercentageEnd,
  SurveyParticipants
} from "./SurveyStyles";

const Survey = ({ name, description, date, range, participants }) => {
  // range.start - positiveFeed
  // range.end - negativeFeed
  // range.start + range.end / 100 = 1% of feeds
  // range.start / 1% of feeds = positive feed in %
  // range.end / 1% of feeds = negative feed in %
  // (132 + 432) / 100 = 5.64
  // 132 / 5.64 = 23.404255319148938
  // 432 / 5.64 = 76.59574468085107
  // dont forget to floor the number to cut of floating point
  return (
    <SurveyContainer>
      <SurveyName>{name}</SurveyName>
      <SurveyDescription>
        {description}
        <SurveyStartingDate>Started: {date}</SurveyStartingDate>
      </SurveyDescription>
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
