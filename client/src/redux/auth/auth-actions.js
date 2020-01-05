import authTypes from "./auth-types";

const {
  FETCH_AUTH_OBJECT_START,
  FETCH_AUTH_OBJECT_SUCCESS,
  FETCH_AUTH_OBJECT_FAILURE
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
