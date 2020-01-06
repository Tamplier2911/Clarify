import "./App.scss";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import { Switch, Route, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { fetchAuthObjectStart } from "./redux/auth/auth-actions";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "./redux/auth/auth-selectors";

// components
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

// pages
import HomePage from "./pages/HomePage/HomePage";
import SurveyPage from "./pages/SurveysPage/SurveysPage";
import CreateSurveyPage from "./pages/CreateSurveyPage/CreateSurveyPage";

// JS Rendering CSS
import { AppContainer, AppMain } from "./AppStyles";

const App = ({ currentUser, fetchAuthObjectStart }) => {
  useEffect(() => {
    fetchAuthObjectStart();
  }, [fetchAuthObjectStart]);
  return (
    <AppContainer>
      {currentUser ? <Header /> : null}
      <Navigation />
      <AppMain>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/surveys" component={SurveyPage} />
          <Route path="/surveys/new" component={CreateSurveyPage} />
        </Switch>
      </AppMain>
      <Footer />
    </AppContainer>
  );
};

const mapStateToPropes = createStructuredSelector({
  currentUser: selectAuthObject
});

export default connect(mapStateToPropes, { fetchAuthObjectStart })(App);
