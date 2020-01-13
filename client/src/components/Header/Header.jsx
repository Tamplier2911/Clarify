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

const Header = ({ currentUser: { name, photo, email, credits } }) => {
  return (
    <HeaderContainer>
      <ImageContainer>
        <UserImage src={photo} alt="user's beauty"></UserImage>
      </ImageContainer>
      <UserCredentials>
        <UserInfo>
          Name: <UserDetails>{name}</UserDetails>
        </UserInfo>
        <UserInfo>
          Email: <UserDetails>{email}</UserDetails>
        </UserInfo>
        <UserInfo>
          Credits: <UserDetails>${credits}</UserDetails>
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
