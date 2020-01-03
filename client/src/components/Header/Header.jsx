import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__imageContainer">
        <img
          src="https://bit.ly/2sH1rvG"
          alt="user's beauty"
          className="header__image"
        ></img>
      </div>
      <div className="header__credentials">
        <div className="header__credentials--first">
          First Name: <span className="header__credentials--span">Artem</span>
        </div>
        <div className="header__credentials--last">
          Last Name:{" "}
          <span className="header__credentials--span">Nikolaiev</span>
        </div>
        <div className="header__credentials--email">
          Email:{" "}
          <span className="header__credentials--span">
            artem.nikolaiev@yahoo.com
          </span>
        </div>
      </div>
      <div className="header__links">
        <Link to="/newSurvey" className="header__links--anchor">
          Create Survey
        </Link>
        <Link to="/surveys" className="header__links--anchor">
          Check Surveys
        </Link>
      </div>
    </header>
  );
};

export default Header;
