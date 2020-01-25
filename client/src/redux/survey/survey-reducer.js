import surveyTypes from "./survey-types";

const {
  //   FETCH_USER_SURVEYS_SUCCESS,
  //   FETCH_USER_SURVEYS_FAILURE,
  CREATE_SURVEY_SUCCESS,
  CREATE_SURVEY_FAILURE
} = surveyTypes;

const INITIAL_STATE = {
  allSurveys: null,
  newSurvey: null,
  errorMessage: null,
  isLoading: false
};

const surveyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SURVEY_SUCCESS:
      return {
        ...state,
        newSurvey: action.payload,
        errorMessage: ""
      };
    case CREATE_SURVEY_FAILURE:
      return {
        ...state,
        newSurvey: null,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default surveyReducer;
