// import "./Navigation.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "../../redux/auth/auth-selectors";

import { logUserOutStart } from "../../redux/auth/auth-actions";

import NavFeature from "../NavFeature/NavFeature";

// JS Rendering CSS
import {
  NavContainer,
  NavWrapper,
  LogoLink,
  LogoSVG,
  NavAction,
  NavAnchors,
  LogOutSVG,
  ArrowSVG,
  NavFeatures,
  AccountsSVG,
  ReportsSVG,
  ProfilesSVG,
  ActionsSVG,
  ManagementSVG,
  HistorySVG
} from "./NavigationStyles";

const Navigation = ({ currentUser, logUserOutStart }) => {
  return (
    <NavContainer>
      <NavWrapper>
        <LogoLink to="/">
          <LogoSVG />
          &#8634;
        </LogoLink>
        <NavAction>
          {currentUser ? (
            <NavAnchors
              to="/"
              onClick={e => {
                e.preventDefault();
                logUserOutStart();
              }}
            >
              <LogOutSVG />
              Log Out
            </NavAnchors>
          ) : (
            <NavAnchors to="/signup">
              <ArrowSVG />
              Get Started
            </NavAnchors>
          )}
        </NavAction>
        {currentUser ? (
          <NavFeatures>
            <NavFeature
              featureName={"Dashboard"}
              featureLinks={[
                {
                  id: "ftr-1x1",
                  name: "Home",
                  svg: <AccountsSVG />,
                  linkTo: "/"
                },
                {
                  id: "ftr-1x2",
                  name: "Campaigns",
                  svg: <ReportsSVG />,
                  linkTo: "/surveys"
                },
                {
                  id: "ftr-1x3",
                  name: "New Campaign",
                  svg: <ProfilesSVG />,
                  linkTo: "/survey-new"
                }
              ]}
            />
            <NavFeature
              featureName={"Administration"}
              featureLinks={[
                {
                  id: "ftr-2x1",
                  name: "Profle",
                  svg: <ActionsSVG />,
                  linkTo: "/"
                },
                {
                  id: "ftr-2x2",
                  name: "Report",
                  svg: <ManagementSVG />,
                  linkTo: "/"
                },
                {
                  id: "ftr-2x3",
                  name: "History",
                  svg: <HistorySVG />,
                  linkTo: "/"
                }
              ]}
            />
          </NavFeatures>
        ) : null}
      </NavWrapper>
    </NavContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectAuthObject
});

export default connect(mapStateToProps, {
  logUserOutStart
})(Navigation);
