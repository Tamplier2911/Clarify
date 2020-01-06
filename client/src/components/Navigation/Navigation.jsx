// import "./Navigation.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "../../redux/auth/auth-selectors";

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

const Navigation = ({ currentUser }) => {
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
            <NavAnchors href="/auth/google/logout">
              <LogOutSVG />
              Log Out
            </NavAnchors>
          ) : (
            <NavAnchors href="/auth/google/login">
              <LogInSVG />
              Log In
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

export default connect(mapStateToProps)(Navigation);
