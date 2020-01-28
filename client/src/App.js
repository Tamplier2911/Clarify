import "./App.scss";
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { fetchAuthObjectStart } from "./redux/auth/auth-actions";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "./redux/auth/auth-selectors";

// components
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

// pages
import HomePage from "./pages/HomePage/HomePage";
import SurveyPage from "./pages/SurveysPage/SurveysPage";
import CreateSurveyPage from "./pages/CreateSurveyPage/CreateSurveyPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SingleSurveyPage from "./pages/SingleSurveyPage/SingleSurveyPage";

// JS Rendering CSS
import { AppContainer, AppMain } from "./AppStyles";

const App = ({ currentUser, fetchAuthObjectStart }) => {
  useEffect(() => {
    fetchAuthObjectStart();
  }, [fetchAuthObjectStart]);
  return (
    <AppContainer>
      <Modal />
      {currentUser ? <Header /> : null}
      <Navigation />
      <AppMain>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/surveys"
            render={() => (!currentUser ? <Redirect to="/" /> : <SurveyPage />)}
          />
          <Route
            exact
            path="/surveys/new"
            render={() =>
              !currentUser ? <Redirect to="/" /> : <CreateSurveyPage />
            }
          />
          <Route
            path="/surveys/:id"
            render={() =>
              !currentUser ? <Redirect to="/" /> : <SingleSurveyPage />
            }
          />
          <Route
            exact
            path="/signup"
            render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
          />
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
