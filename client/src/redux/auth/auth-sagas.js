import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import {
  fetchAuthObjectSuccess,
  fetchAuthObjectFailure,
  logUserInSuccess,
  logUserInFailure,
  logUserOutSuccess,
  logUserOutFailure,
  fetchAuthObjectStart
} from "./auth-actions";
import authTypes from "./auth-types";

const {
  FETCH_AUTH_OBJECT_START,
  LOG_USER_IN_START,
  LOG_USER_OUT_START
} = authTypes;

export function* fetchAuthObject() {
  try {
    const authObject = yield axios({
      method: "GET",
      url: "/auth/google/isLogged"
    });

    yield put(fetchAuthObjectSuccess(authObject.data));
  } catch (error) {
    yield put(fetchAuthObjectFailure(error.message));
  }
}

export function* logUserIn() {
  try {
    yield axios({
      method: "GET",
      url: "/auth/google/login"
    });
    yield put(logUserInSuccess(true));
    yield put(fetchAuthObjectStart());
  } catch (error) {
    yield put(logUserInFailure(error.message));
  }
  yield console.log("log in from saga :D");
}

export function* logUserOut() {
  try {
    yield axios({
      method: "GET",
      url: "/auth/google/logout"
    });
    yield put(logUserOutSuccess(false));
    yield put(fetchAuthObjectStart());
  } catch (error) {
    yield put(logUserOutFailure(error.message));
  }
  yield console.log("log out from saga :D");
}

export function* onFetchAuthObjectStart() {
  yield takeLatest(FETCH_AUTH_OBJECT_START, fetchAuthObject);
}

export function* onLogUserInStart() {
  yield takeLatest(LOG_USER_IN_START, logUserIn);
}

export function* onLogUserOutStart() {
  yield takeLatest(LOG_USER_OUT_START, logUserOut);
}

export function* authSagas() {
  yield all([
    call(onFetchAuthObjectStart),
    call(onLogUserInStart),
    call(onLogUserOutStart)
  ]);
}
