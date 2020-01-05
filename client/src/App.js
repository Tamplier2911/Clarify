import "./App.scss";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import { Switch, Route, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { fetchAuthObjectStart } from "./redux/auth/auth-actions";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "./redux/auth/auth-selectors";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const Landing = () => {
  return (
    <div>
      <div>Clarify is Email Survey Application</div>
    </div>
  );
};

const Dashboard = () => {
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

const App = ({ currentUser, fetchAuthObjectStart }) => {
  useEffect(() => {
    fetchAuthObjectStart();
  }, [fetchAuthObjectStart]);
  return (
    <div className="container">
      {currentUser ? <Header /> : null}
      <Navigation />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={NewSurvey} />
        </Switch>
      </main>
      <footer className="footer" style={{ fontSize: "1.2rem" }}>
        &copy; App Created by Artem Nikolaiev. All rights reserved.
      </footer>
    </div>
  );
};

const mapStateToPropes = createStructuredSelector({
  currentUser: selectAuthObject
});

export default connect(mapStateToPropes, { fetchAuthObjectStart })(App);
