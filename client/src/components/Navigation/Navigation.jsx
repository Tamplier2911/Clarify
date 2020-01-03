import "./Navigation.scss";
import React from "react";

import { ReactComponent as Logo } from "../../assets/svg/clarify-logo.svg";
import { ReactComponent as LogOut } from "../../assets/svg/logout.svg";
import { ReactComponent as LogIn } from "../../assets/svg/google.svg";
import { ReactComponent as Settings } from "../../assets/svg/settings.svg";

const Navigation = () => {
  let loggedIn = Math.random() > 0.5 ? true : false;
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__logo">
          <Logo className="navigation__logo--svg" />
        </div>
        <div className="navigation__action">
          <a className="navigation__action--settings" href="#">
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
        <div className="navigation__features">Features</div>
      </div>
    </nav>
  );
};

export default Navigation;
