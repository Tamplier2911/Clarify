import authTypes from "./auth-types";

const {
  FETCH_AUTH_OBJECT_START,
  FETCH_AUTH_OBJECT_SUCCESS,
  FETCH_AUTH_OBJECT_FAILURE,
  LOG_USER_IN_START,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  LOG_USER_OUT_START,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_FAILURE,
  SIGN_USER_UP_START,
  SIGN_USER_UP_SUCCESS,
  SIGH_USER_UP_FAILURE
} = authTypes;

export const fetchAuthObjectStart = () => ({
  type: FETCH_AUTH_OBJECT_START
});

export const fetchAuthObjectSuccess = userObject => ({
  type: FETCH_AUTH_OBJECT_SUCCESS,
  payload: userObject
});

export const fetchAuthObjectFailure = errorMessage => ({
  type: FETCH_AUTH_OBJECT_FAILURE,
  payload: errorMessage
});

export const logUserInStart = ({ email, password }) => ({
  type: LOG_USER_IN_START,
  payload: { email, password }
});

export const logUserInSuccess = loggedIn => ({
  type: LOG_USER_IN_SUCCESS,
  payload: loggedIn
});

export const logUserInFailure = errorMessage => ({
  type: LOG_USER_IN_FAILURE,
  payload: errorMessage
});

export const logUserOutStart = () => ({
  type: LOG_USER_OUT_START
});

export const logUserOutSuccess = loggedOut => ({
  type: LOG_USER_OUT_SUCCESS,
  payload: loggedOut
});

export const logUserOutFailure = errorMessage => ({
  type: LOG_USER_OUT_FAILURE,
  payload: errorMessage
});

export const signUserUpStart = ({
  name,
  email,
  password,
  passwordConfirm
}) => ({
  type: SIGN_USER_UP_START,
  payload: { name, email, password, passwordConfirm }
});

export const signUserUpSuccess = signedUp => ({
  type: SIGN_USER_UP_SUCCESS,
  payload: signedUp
});

export const signUserUpFailure = errorMessage => ({
  type: SIGH_USER_UP_FAILURE,
  payload: errorMessage
});
