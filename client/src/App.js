import "./App.scss";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <div className="container">
      <div className="header">Header</div>
      <Navigation />
      <main className="main">
        {/* <Switch> */}
        <div>Hello, app</div>
        {/* </Switch> */}
      </main>
      <div className="footer">Footer</div>
    </div>
  );
};

export default App;
