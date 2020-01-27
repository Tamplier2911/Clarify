import "./SurveysPage.scss";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchUserSurveysStart } from "../../redux/survey/survey-actions";
import { selectUserSurveys } from "../../redux/survey/survey-selectors";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/WithSpinner/WithSpinner";
import SurveyCampaigns from "../../components/SurveyCampaigns/SurveyCampaigns";

// JS Rendering CSS
import { SurveyPageContainer, SurveyPageTitle } from "./SurveysPageStyles";

// buff SurveyCampaigns with spinner
const SurveyCampaignsWithSpinner = WithSpinner(SurveyCampaigns);

const SurveysPage = ({ fetchUserSurveysStart, surveys }) => {
  useEffect(() => {
    if (!surveys.length) {
      fetchUserSurveysStart();
    }
  }, [fetchUserSurveysStart, surveys.length]);

  return (
    <SurveyPageContainer>
      <SurveyPageTitle>Currentlty active survey campaigns:</SurveyPageTitle>
      <SurveyCampaignsWithSpinner
        isLoading={!surveys.length}
        surveys={surveys}
      />
    </SurveyPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  surveys: selectUserSurveys
});

export default connect(mapStateToProps, { fetchUserSurveysStart })(SurveysPage);
