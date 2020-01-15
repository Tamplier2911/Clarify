import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// service worker
import * as serviceWorker from "./serviceWorker";

// router
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// redux-persist

// JS Rendered Styles

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
