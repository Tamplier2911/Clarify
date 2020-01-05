// import "./Navigation.scss";
import React from "react";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "../../redux/auth/auth-selectors";

import { ReactComponent as Logo } from "../../assets/svg/clarify-logo.svg";
import { ReactComponent as LogOut } from "../../assets/svg/logout.svg";
import { ReactComponent as LogIn } from "../../assets/svg/google.svg";
import { ReactComponent as Settings } from "../../assets/svg/settings.svg";

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
                  name: "Accounts",
                  svg: <AccountsSVG />,
                  linkTo: "/"
                },
                {
                  id: "ftr-1x2",
                  name: "Reports",
                  svg: <ReportsSVG />,
                  linkTo: "/"
                },
                {
                  id: "ftr-1x3",
                  name: "Profiles",
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
