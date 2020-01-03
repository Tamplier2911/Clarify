import "./App.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const Landing = () => {
  return (
    <div>
      <div>Clarify is Email Survey Application</div>
    </div>
  );
};

const Surveys = () => {
  return (
    <div>
      <div>Here is all your surveys!</div>
    </div>
  );
};

const NewSurvey = () => {
  return (
    <div>
      <div>Create new survey!</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={Surveys} />
          <Route path="/newSurvey" component={NewSurvey} />
        </Switch>
      </main>
      <footer className="footer" style={{ fontSize: "1.2rem" }}>
        &copy; App Created by Artem Nikolaiev. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
