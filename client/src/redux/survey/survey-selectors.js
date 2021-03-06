import { createSelector } from "reselect";

const selectSurvey = state => state.survey;

export const selectSurveyLoadingStatus = createSelector(
  [selectSurvey],
  survey => survey.isLoading
);

export const selectUserSurveys = createSelector(
  [selectSurvey],
  survey => survey.allSurveys
);

export const selectSurveyById = surveyUrlParamsId =>
  createSelector([selectUserSurveys], surveys =>
    surveys.filter(el => el._id === surveyUrlParamsId)
  );
