import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import { fetchAuthObjectSuccess, fetchAuthObjectFailure } from "./auth-actions";
import authTypes from "./auth-types";

const { FETCH_AUTH_OBJECT_START } = authTypes;

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

export function* onFetchAuthObjectStart() {
  yield takeLatest(FETCH_AUTH_OBJECT_START, fetchAuthObject);
}

export function* authSagas() {
  yield all([call(onFetchAuthObjectStart)]);
}
