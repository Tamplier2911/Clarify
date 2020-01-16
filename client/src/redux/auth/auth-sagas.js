import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import {
  fetchAuthObjectStart,
  fetchAuthObjectSuccess,
  fetchAuthObjectFailure,
  logUserInSuccess,
  logUserInFailure,
  logUserOutSuccess,
  logUserOutFailure,
  signUserUpSuccess,
  signUserUpFailure
} from "./auth-actions";
import authTypes from "./auth-types";

const {
  FETCH_AUTH_OBJECT_START,
  LOG_USER_IN_START,
  LOG_USER_OUT_START,
  SIGN_USER_UP_START
} = authTypes;

export function* fetchAuthObject() {
  try {
    const res = yield axios({
      method: "GET",
      url: "/api/v1/users/isLoggedIn"
    });
    yield put(fetchAuthObjectSuccess(res.data.data.data));
  } catch (error) {
    yield put(fetchAuthObjectFailure(error.message));
    yield alert(error.message);
  }
}

export function* logUserIn({ payload }) {
  try {
    yield axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email: payload.email,
        password: payload.password
      }
    });
    yield put(logUserInSuccess(true));
    yield put(fetchAuthObjectStart());
  } catch (error) {
    yield put(logUserInFailure(error.message));
    yield alert(error.message);
  }
}

export function* logUserOut() {
  try {
    yield axios({
      method: "GET",
      url: "/api/v1/users/logout"
    });
    yield put(logUserOutSuccess(false));
    yield put(fetchAuthObjectStart());
  } catch (error) {
    yield put(logUserOutFailure(error.message));
    yield alert(error.message);
  }
}

export function* signUserUp({ payload }) {
  try {
    yield axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        passwordConfirm: payload.passwordConfirm
      }
    });
    yield put(signUserUpSuccess(true));
    yield put(fetchAuthObjectStart());
  } catch (error) {
    yield put(signUserUpFailure(error.message));
    yield alert(error.message);
  }
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

export function* onSignUserUp() {
  yield takeLatest(SIGN_USER_UP_START, signUserUp);
}

export function* authSagas() {
  yield all([
    call(onFetchAuthObjectStart),
    call(onLogUserInStart),
    call(onLogUserOutStart),
    call(onSignUserUp)
  ]);
}
