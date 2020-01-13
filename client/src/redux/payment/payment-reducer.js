import paymentTypes from "./payment-types";

const { REQUEST_PAYMENT_SUCCESS, REQUEST_PAYMENT_FAILURE } = paymentTypes;

const INITIAL_STATE = {
  successMessage: null,
  errorMessage: null
};

const paymentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PAYMENT_SUCCESS:
      return { ...state, successMessage: action.payload, errorMessage: null };
    case REQUEST_PAYMENT_FAILURE:
      return { ...state, successMessage: null, errorMessage: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
