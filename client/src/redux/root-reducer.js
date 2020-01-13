// redux
import { combineReducers } from "redux";

// reducers
import authReducer from "./auth/auth-reducer";
import paymentReducer from "./payment/payment-reducer";

const rootReducer = combineReducers({
  user: authReducer,
  payment: paymentReducer
});

export default rootReducer;
