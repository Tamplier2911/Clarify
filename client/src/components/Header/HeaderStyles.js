import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: min-content repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 4rem;

  grid-column: 2 / 3;
  background-image: linear-gradient(to bottom, #ffffffd8, #ffdddd);
  z-index: 3;
  box-shadow: 0.4rem 0.2rem 0.4rem #00000042;

  padding: 2rem;

  @media only screen and (max-width: 920px) {
    grid-template-columns: min-content 1fr;
    grid-row-gap: 2rem;
  }

  @media only screen and (max-width: 48em) {
    grid-column: 1 / 3;
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 12rem;
  height: 12rem;
  border: 0.4rem solid #f09999;
  border-radius: 50%;
  box-shadow: 0 0.2rem 0.4rem #00000048;
`;

export const UserImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserCredentials = styled.div``;

export const UserInfo = styled.div`
  width: 20vw;
  color: #f09999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 48em) {
    width: 40vw;
  }
`;

export const UserDetails = styled.span`
  color: var(--cl-font);
`;

export const UserLinks = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 1124px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 920px) {
    grid-column: 1 / -1;
    flex-direction: row;
  }

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const UserLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--cl-white);

    text-align: center;

    background-color: #f09999;
    border: 0.1rem #f09999 solid;
    border-radius: 2rem;
    padding: 0.2rem 1rem;
    box-shadow: 0 0.2rem 0.4rem #00000048;
    font-weight: 300;

    transition: color 0.3s, background-color 0.3s;
  }

  @media only screen and (max-width: 450px) {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &:hover,
  &:active {
    color: #f09999;
    background-color: #fff;
  }
`;
