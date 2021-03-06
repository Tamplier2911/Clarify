// import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// JS Rendering CSS Global Style
import { GlobalStyle } from "./IndexStyles";

// service worker
import * as serviceWorker from "./serviceWorker";

// router
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
