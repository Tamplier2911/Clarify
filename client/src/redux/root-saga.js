import { all, call } from "redux-saga/effects";

// sagas
import { authSagas } from "./auth/auth-sagas";
import { paymentSagas } from "./payment/payment-sagas";
import { surveySaga } from "./survey/survey-sagas";

export default function* rootSaga() {
  yield all([call(authSagas), call(paymentSagas), call(surveySaga)]);
}
