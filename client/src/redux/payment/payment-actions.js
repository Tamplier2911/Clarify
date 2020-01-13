import paymentTypes from "./payment-types";

const {
  REQUEST_PAYMENT_START,
  REQUEST_PAYMENT_SUCCESS,
  REQUEST_PAYMENT_FAILURE
} = paymentTypes;

export const requestPaymentStart = token => ({
  type: REQUEST_PAYMENT_START,
  payload: token
});

export const requestPaymentSuccess = successMessage => ({
  type: REQUEST_PAYMENT_SUCCESS,
  payload: successMessage
});

export const requestPaymentFailure = errorMessage => ({
  type: REQUEST_PAYMENT_FAILURE,
  payload: errorMessage
});
