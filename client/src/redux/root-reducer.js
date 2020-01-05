// redux
import { combineReducers } from "redux";

// reducers
import authReducer from "./auth/auth-reducer";

const testReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: authReducer,
  test: testReducer
});

export default rootReducer;
