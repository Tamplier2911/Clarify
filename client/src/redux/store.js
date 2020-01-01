import { createStore, applyMiddleware } from "redux";

// middlewares
import logger from "redux-logger";

// redux-saga
import createSagaMiddleware from "redux-saga";

// root saga
import rootSaga from "./root-saga";

// root reducer
import rootReducer from "./root-reducer";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// middleware stack
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
  // +
  //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__()
);

// use saga
sagaMiddleware.run(rootSaga);
