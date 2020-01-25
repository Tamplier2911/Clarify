// redux
import { combineReducers } from "redux";

// reducers
import authReducer from "./auth/auth-reducer";
import paymentReducer from "./payment/payment-reducer";
import surveyReducer from "./survey/survey-reducer";

const rootReducer = combineReducers({
  user: authReducer,
  payment: paymentReducer,
  survey: surveyReducer
});

export default rootReducer;
