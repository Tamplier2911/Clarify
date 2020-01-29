// import "./Survey.scss";
import React from "react";

import { withRouter } from "react-router-dom";

// JS Rendering CSS
import {
  SurveyContainer,
  SurveyName,
  SurveyDescription,
  SurveyDesc,
  SurveyStartingDate,
  SurveyProgress,
  SurveyPercentageStart,
  SurveyPercentageEnd,
  SurveyParticipants
} from "./SurveyStyles";

const Survey = ({
  name,
  description,
  date,
  range,
  participants,
  surveyId,
  match: { path }
}) => {
  // range.start - positiveFeed
  // range.end - negativeFeed
  // range.start + range.end / 100 = 1% of feeds
  // range.start / 1% of feeds = positive feed in %
  // range.end / 1% of feeds = negative feed in %
  // (132 + 432) / 100 = 5.64
  // 132 / 5.64 = 23.404255319148938
  // 432 / 5.64 = 76.59574468085107
  // dont forget to round the number to cut of floating point
  const percentOfOne = (range.start + range.end) / 100;
  const percentOfStart = Math.round(range.start / percentOfOne);
  const percentOfEnd = Math.round(range.end / percentOfOne);
  range = { start: percentOfStart, end: percentOfEnd };
  return (
    <SurveyContainer to={`${path}/${surveyId}`}>
      <SurveyName>{name}</SurveyName>
      <SurveyDescription>
        <SurveyDesc>{description}</SurveyDesc>
        <SurveyStartingDate>Started: {date}</SurveyStartingDate>
      </SurveyDescription>
      <SurveyProgress range={range.start ? range : { start: 50, end: 50 }}>
        <SurveyPercentageStart>{range.start || 0}%</SurveyPercentageStart>
        <SurveyPercentageEnd>{range.end || 0}%</SurveyPercentageEnd>
      </SurveyProgress>
      <SurveyParticipants>
        Participants enrolled: {participants}
      </SurveyParticipants>
    </SurveyContainer>
  );
};

export default withRouter(Survey);
