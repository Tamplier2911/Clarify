import authTypes from "./auth-types";

const {
  FETCH_AUTH_OBJECT_SUCCESS,
  FETCH_AUTH_OBJECT_FAILURE,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_FAILURE,
  SIGN_USER_UP_SUCCESS,
  SIGH_USER_UP_FAILURE
} = authTypes;

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
  isLogged: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTH_OBJECT_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
        isLogged: action.payload ? true : false
      };
    case SIGN_USER_UP_SUCCESS:
    case LOG_USER_IN_SUCCESS:
    case LOG_USER_OUT_SUCCESS:
      return { ...state, isLogged: action.payload };
    case FETCH_AUTH_OBJECT_FAILURE:
    case LOG_USER_IN_FAILURE:
    case LOG_USER_OUT_FAILURE:
    case SIGH_USER_UP_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;
