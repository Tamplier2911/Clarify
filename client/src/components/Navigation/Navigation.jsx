import "./Navigation.scss";
import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/svg/clarify-logo.svg";
import { ReactComponent as LogOut } from "../../assets/svg/logout.svg";
import { ReactComponent as LogIn } from "../../assets/svg/google.svg";
import { ReactComponent as Settings } from "../../assets/svg/settings.svg";

import NavFeature from "../NavFeature/NavFeature";

import {
  AccountsSVG,
  ReportsSVG,
  ProfilesSVG,
  ActionsSVG,
  ManagementSVG,
  HistorySVG
} from "./NavigationStyles";

const Navigation = () => {
  let loggedIn = Math.random() > 0.5 ? true : false;
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <Link to="/" className="navigation__logo">
          <Logo className="navigation__logo--svg" />
        </Link>
        <div className="navigation__action">
          <a className="navigation__action--settings" href="/">
            <Settings />
            Settings
          </a>
          <div className="navigation__action--pillar"></div>
          {loggedIn ? (
            <a
              className="navigation__action--logout"
              href="/auth/google/logout"
            >
              <LogOut />
              Log Out
            </a>
          ) : (
            <a href="/auth/google/login" className="navigation__action--login">
              <LogIn />
              Log In
            </a>
          )}
        </div>
        <div className="navigation__features">
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
