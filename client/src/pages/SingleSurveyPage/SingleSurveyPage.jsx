import "./SingleSurveyPage.scss";
import React from "react";

// router
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectSurveyById } from "../../redux/survey/survey-selectors";

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
  return (
    <div className="singleSurveyPage__container">
      <div>Survey Name: {name}</div>
      <div>Survey Description: {description}</div>
      <div>Survey Body: {body}</div>
      <div>Survey Created At: {createdAt}</div>
      <div>Survey Positive Feed: {positiveFeed}</div>
      <div>Survey Negative Feed: {negativeFeed}</div>
      <div>Survey Participants Enrolled: {participantsEnrolled}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  survey: selectSurveyById(ownProps.match.params.id)(state)
});

export default withRouter(connect(mapStateToProps)(SingleSurveyPage));
