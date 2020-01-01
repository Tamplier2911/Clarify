// redux
import { combineReducers } from "redux";

// reducers
const testReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
