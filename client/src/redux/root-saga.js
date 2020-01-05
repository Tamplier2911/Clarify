import { all, call } from "redux-saga/effects";

// sagas
import { authSagas } from "./auth/auth-sagas";

export default function* rootSaga() {
  yield all([call(authSagas)]);
}
