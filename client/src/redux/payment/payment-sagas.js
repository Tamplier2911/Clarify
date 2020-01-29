import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import { popModal } from "../../utils/popupUtil";

import {
  requestPaymentSuccess,
  requestPaymentFailure
} from "./payment-actions";

import { fetchAuthObjectStart } from "../auth/auth-actions";

import paymentTypes from "./payment-types";
const { REQUEST_PAYMENT_START } = paymentTypes;

export function* requestPayment(action) {
  const { payload } = action;

  try {
    const res = yield axios({
      method: "POST",
      url: "/api/v1/payment",
      data: {
        amount: payload.amount,
        token: payload.token,
        price: payload.price
      }
    });

    yield put(
      requestPaymentSuccess(
        `Success! name: ${res.data.success.billing_details.name}, email: ${
          payload.token.email
        }, amount: $${res.data.success.amount / 100}.`
      )
    );

    yield popModal(
      "Payment Success!",
      `name: ${res.data.success.billing_details.name}, email: ${
        payload.token.email
      }, amount: $${res.data.success.amount / 100}.`
    );

    yield put(fetchAuthObjectStart());
  } catch (error) {
    yield put(
      requestPaymentFailure(
        `There was an issues with your payment, please try again. ${error.message}.`
      )
    );
    yield popModal(
      "Something went wrong!",
      `There was an issues with your payment, please try again. ${error.message}`
    );
  }
}

export function* onRequestPaymentStart() {
  yield takeLatest(REQUEST_PAYMENT_START, requestPayment);
}

export function* paymentSagas() {
  yield all([call(onRequestPaymentStart)]);
}
