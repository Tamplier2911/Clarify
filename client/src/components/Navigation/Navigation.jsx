import "./Navigation.scss";
import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/svg/clarify-logo.svg";
import { ReactComponent as LogOut } from "../../assets/svg/logout.svg";
import { ReactComponent as LogIn } from "../../assets/svg/google.svg";
import { ReactComponent as Settings } from "../../assets/svg/settings.svg";

import { ReactComponent as Accounts } from "../../assets/svg/accounts.svg";
import { ReactComponent as Reports } from "../../assets/svg/report.svg";
import { ReactComponent as Profiles } from "../../assets/svg/profiles.svg";
import { ReactComponent as Actions } from "../../assets/svg/actions.svg";
import { ReactComponent as Management } from "../../assets/svg/management.svg";
import { ReactComponent as History } from "../../assets/svg/history.svg";

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
          <ul className="navigation__features--dashboard">
            Dashboard
            <div className="navigation__features--decoration"></div>
            <li className="navigation__features--dashboard-item">
              <a className="navigation__features--dashboard-link" href="/">
                <Accounts className="navigation__features--svg" /> Accounts
              </a>
            </li>
            <li className="navigation__features--dashboard-item">
              <a className="navigation__features--dashboard-link" href="/">
                <Reports className="navigation__features--svg" /> Reports
              </a>
            </li>
            <li className="navigation__features--dashboard-item">
              <a className="navigation__features--dashboard-link" href="/">
                <Profiles className="navigation__features--svg" /> Profiles
              </a>
            </li>
          </ul>
          <ul className="navigation__features--administration">
            Administration
            <div className="navigation__features--decoration"></div>
            <li className="navigation__features--administration-item">
              <a className="navigation__features--administration-link" href="/">
                <Actions className="navigation__features--svg" /> Actions
              </a>
            </li>
            <li className="navigation__features--administration-item">
              <a className="navigation__features--administration-link" href="/">
                <Management className="navigation__features--svg" /> Day
                Management
              </a>
            </li>
            <li className="navigation__features--administration-item">
              <a className="navigation__features--administration-link" href="/">
                <History className="navigation__features--svg" /> History
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
