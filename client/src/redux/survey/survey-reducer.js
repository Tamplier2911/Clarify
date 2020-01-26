import surveyTypes from "./survey-types";

const {
  FETCH_USER_SURVEYS_START,
  FETCH_USER_SURVEYS_SUCCESS,
  FETCH_USER_SURVEYS_FAILURE,
  CREATE_SURVEY_SUCCESS,
  CREATE_SURVEY_FAILURE
} = surveyTypes;

const INITIAL_STATE = {
  allSurveys: [],
  newSurvey: null,
  errorMessage: null,
  isLoading: false
};

const surveyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_SURVEYS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USER_SURVEYS_SUCCESS:
      return {
        ...state,
        allSurveys: action.payload,
        errorMessage: "",
        isLoading: false
      };
    case FETCH_USER_SURVEYS_FAILURE:
      return {
        ...state,
        allSurveys: null,
        errorMessage: action.payload,
        isLoading: false
      };
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
