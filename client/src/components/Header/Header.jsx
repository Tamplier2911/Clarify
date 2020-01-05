// import "./Header.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "../../redux/auth/auth-selectors";

// JS Rendering CSS
import {
  HeaderContainer,
  ImageContainer,
  UserImage,
  UserCredentials,
  UserInfo,
  UserDetails,
  UserLinks,
  UserLink
} from "./HeaderStyles";

const Header = ({ currentUser: { name, photo, email } }) => {
  const firstName = name.split(" ")[0];
  const secondName = name.split(" ")[1];

  return (
    <HeaderContainer>
      <ImageContainer>
        <UserImage src={photo} alt="user's beauty"></UserImage>
      </ImageContainer>
      <UserCredentials>
        <UserInfo>
          First Name: <UserDetails>{firstName}</UserDetails>
        </UserInfo>
        <UserInfo>
          Last Name: <UserDetails>{secondName}</UserDetails>
        </UserInfo>
        <UserInfo>
          Email: <UserDetails>{email}</UserDetails>
        </UserInfo>
      </UserCredentials>
      <UserLinks>
        <UserLink to="/surveys/new">Create Survey</UserLink>
        <UserLink to="/surveys">Check Surveys</UserLink>
      </UserLinks>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectAuthObject
});

export default connect(mapStateToProps)(Header);
