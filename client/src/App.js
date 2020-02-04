// import "./App.scss";
import React, { useEffect, lazy, Suspense } from "react";
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
import LazzySpinner from "./components/LazzySpinner/LazzySpinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

// pages
// import HomePage from "./pages/HomePage/HomePage";
// import SurveyPage from "./pages/SurveysPage/SurveysPage";
// import CreateSurveyPage from "./pages/CreateSurveyPage/CreateSurveyPage";
// import SignUpPage from "./pages/SignUpPage/SignUpPage";
// import SingleSurveyPage from "./pages/SingleSurveyPage/SingleSurveyPage";
// import ParticipantsPage from "./pages/ParticipantsPage/ParticipantsPage";

// JS Rendering CSS
import { AppContainer, AppMain } from "./AppStyles";

// lazzy loaded pages
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SurveyPage = lazy(() => import("./pages/SurveysPage/SurveysPage"));
const CreateSurveyPage = lazy(() =>
  import("./pages/CreateSurveyPage/CreateSurveyPage")
);
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SingleSurveyPage = lazy(() =>
  import("./pages/SingleSurveyPage/SingleSurveyPage")
);
const ParticipantsPage = lazy(() =>
  import("./pages/ParticipantsPage/ParticipantsPage")
);

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
          <ErrorBoundary>
            <Suspense fallback={<LazzySpinner />}>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/surveys"
                render={() =>
                  !currentUser ? <Redirect to="/" /> : <SurveyPage />
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
                path="/survey-new"
                render={() =>
                  !currentUser ? <Redirect to="/" /> : <CreateSurveyPage />
                }
              />
              <Route
                exact
                path="/signup"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignUpPage />
                }
              />
              <Route
                path="/api/v1/surveys/vote/"
                component={ParticipantsPage}
              />
            </Suspense>
          </ErrorBoundary>
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
