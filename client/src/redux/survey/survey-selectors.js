import { createSelector } from "reselect";

const selectSurvey = state => state.survey;

export const selectUserSurveys = createSelector(
  [selectSurvey],
  survey => survey.allSurveys
);
