import surveyTypes from "./survey-types";

const {
  //   FETCH_USER_SURVEYS_START,
  //   FETCH_USER_SURVEYS_SUCCESS,
  //   FETCH_USER_SURVEYS_FAILURE,
  CREATE_SURVEY_START,
  CREATE_SURVEY_SUCCESS,
  CREATE_SURVEY_FAILURE
} = surveyTypes;

export const createSurveyStart = formInputs => ({
  type: CREATE_SURVEY_START,
  payload: formInputs
});

export const createSurveySuccess = surveyObject => ({
  type: CREATE_SURVEY_SUCCESS,
  payload: surveyObject
});

export const createSurveyFailure = errorMessage => ({
  type: CREATE_SURVEY_FAILURE,
  payload: errorMessage
});
