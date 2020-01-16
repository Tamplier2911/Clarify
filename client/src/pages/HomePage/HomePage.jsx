// import "./HomePage.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "../../redux/auth/auth-selectors";

// JS Rendering CSS
import {
  HomepageContainer,
  HomepageWallpaper,
  HomepageStep,
  HomepageIntroLeft,
  HomepageIntroRight,
  HomepageWelcome,
  HomepageCTA,
  HomepageLink
} from "./HomePageStyles";

const HomePage = ({ user }) => {
  return (
    <HomepageContainer>
      <HomepageWallpaper />
      <HomepageIntroLeft>
        <HomepageStep>1</HomepageStep>
        Clarify - is an email service, that helps you to know what other people
        think of your service or a feature.
      </HomepageIntroLeft>
      <HomepageIntroRight>
        In order to help you improve it, we sending thousands of letters to an
        existing users base.
        <HomepageStep>2</HomepageStep>
      </HomepageIntroRight>
      <HomepageIntroLeft>
        <HomepageStep>3</HomepageStep>
        Each letter - containing a poll, which recipient can participate in.
      </HomepageIntroLeft>
      <HomepageIntroRight>
        Once survey is finished you can access results from your dashbord
        shortly.
        <HomepageStep>4</HomepageStep>
      </HomepageIntroRight>
      {user ? (
        <HomepageWelcome> Wellcome! </HomepageWelcome>
      ) : (
        <HomepageCTA>
          Interested? Don't wait!{" "}
          <HomepageLink to="/signup">Sign Up</HomepageLink> now!
        </HomepageCTA>
      )}
    </HomepageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectAuthObject
});

export default connect(mapStateToProps)(HomePage);
