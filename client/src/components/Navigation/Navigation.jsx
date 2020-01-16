// import "./Navigation.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "../../redux/auth/auth-selectors";

import { logUserInStart, logUserOutStart } from "../../redux/auth/auth-actions";

import NavFeature from "../NavFeature/NavFeature";

// JS Rendering CSS
import {
  NavContainer,
  NavWrapper,
  LogoLink,
  LogoSVG,
  NavAction,
  NavAnchors,
  NavPillar,
  LogOutSVG,
  LogInSVG,
  NavFeatures,
  SettingsSVG,
  AccountsSVG,
  ReportsSVG,
  ProfilesSVG,
  ActionsSVG,
  ManagementSVG,
  HistorySVG
} from "./NavigationStyles";

const Navigation = ({ currentUser, logUserInStart, logUserOutStart }) => {
  return (
    <NavContainer>
      <NavWrapper>
        <LogoLink to="/">
          <LogoSVG />
        </LogoLink>
        <NavAction>
          <NavAnchors href="/">
            <SettingsSVG />
            Settings
          </NavAnchors>
          <NavPillar />
          {currentUser ? (
            <button type="button" onClick={() => logUserOutStart()}>
              <LogOutSVG />
              Log Out
            </button>
          ) : (
            <button type="button" onClick={() => logUserInStart()}>
              <LogInSVG />
              Log In
            </button>
          )}
        </NavAction>
        {currentUser ? (
          <NavFeatures>
            <NavFeature
              featureName={"Dashboard"}
              featureLinks={[
                {
                  id: "ftr-1x1",
                  name: "Account",
                  svg: <AccountsSVG />,
                  linkTo: "/"
                },
                {
                  id: "ftr-1x2",
                  name: "Report",
                  svg: <ReportsSVG />,
                  linkTo: "/"
                },
                {
                  id: "ftr-1x3",
                  name: "Profile",
                  svg: <ProfilesSVG />,
                  linkTo: "/"
                }
              ]}
            />
            <NavFeature
              featureName={"Administration"}
              featureLinks={[
                {
                  id: "ftr-2x1",
                  name: "Actions",
                  svg: <ActionsSVG />,
                  linkTo: "/"
                },
                {
                  id: "ftr-2x2",
                  name: "Day Management",
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

export default connect(mapStateToProps, { logUserInStart, logUserOutStart })(
  Navigation
);
