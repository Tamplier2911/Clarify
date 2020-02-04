// import "./SingleSurveyPage.scss";
import React from "react";

// router
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectSurveyById } from "../../redux/survey/survey-selectors";

// JS Rendering CSS
import {
  SingleSurveyContainer,
  SingleSurveyDescription,
  SingleSurveyData,
  SingleSurveyName,
  SingleSurveyDesc,
  SingleSurveyText,
  SingleSurveyBody,
  SingleSurveyNegative,
  SingleSurveyPositive,
  SingleSurveyTotal,
  SingleSurveyDate
} from "./SingleSurveyPageStyles";

const SingleSurveyPage = ({ survey }) => {
  const {
    name,
    description,
    body,
    createdAt,
    positiveFeed,
    negativeFeed,
    participantsEnrolled
  } = survey[0];
  const percentOfOne = (positiveFeed + negativeFeed) / 100;
  const percentOfPositive = Math.round(positiveFeed / percentOfOne);
  const percentOfNegative = Math.round(negativeFeed / percentOfOne);
  return (
    <SingleSurveyContainer>
      <SingleSurveyDescription>
        <SingleSurveyName>{name}</SingleSurveyName>
        <SingleSurveyDesc>{description}</SingleSurveyDesc>
      </SingleSurveyDescription>
      <SingleSurveyData>
        <SingleSurveyBody>
          <SingleSurveyText>Survey subject:</SingleSurveyText> {body}
        </SingleSurveyBody>
        <SingleSurveyNegative
          negPercent={percentOfNegative || 0}
          posPercent={percentOfPositive || 0}
        >
          {percentOfNegative || 0}%
        </SingleSurveyNegative>
        <SingleSurveyPositive
          negPercent={percentOfNegative || 0}
          posPercent={percentOfPositive || 0}
        >
          {percentOfPositive || 0}%
        </SingleSurveyPositive>
        <SingleSurveyTotal>
          <SingleSurveyText>
            Total number of participants enrolled this survey:
          </SingleSurveyText>{" "}
          {participantsEnrolled}
        </SingleSurveyTotal>
        <SingleSurveyDate>
          <SingleSurveyText>Survey created at:</SingleSurveyText>{" "}
          {new Date(createdAt).toLocaleString("en-us", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </SingleSurveyDate>
      </SingleSurveyData>
    </SingleSurveyContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  survey: selectSurveyById(ownProps.match.params.id)(state)
});

export default withRouter(connect(mapStateToProps)(SingleSurveyPage));
