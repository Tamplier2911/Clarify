import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import image from "../../assets/jpg/clarify.jpg";

const introStyle = css`
  display: grid;
  align-items: center;

  padding: 2rem;
  color: #704646;
  font-size: 1.6rem;
  font-weight: 400;
`;

const CTAStyle = css`
  padding: 2rem;
  text-align: center;
  color: #704646;
`;

export const HomepageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 2rem;
`;

export const HomepageWallpaper = styled.div`
  background-image: linear-gradient(#ffb1b159 60%, #ffffff), url(${image});
  background-size: cover;
  background-position: center;
  height: 31rem;
`;

export const HomepageStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.2rem #704646 solid;
  border-radius: 50%;
  background-color: #ffc8c8;

  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
  margin-left: 2rem;
  font-size: 2.4rem;
`;

export const HomepageIntroLeft = styled.div`
  ${introStyle}
  grid-template-columns: min-content 1fr;
  background-image: linear-gradient(to right, #eda0a3, #fff);
`;

export const HomepageIntroRight = styled.div`
  ${introStyle}
  grid-template-columns: 1fr min-content;
  justify-items: end;
  background-image: linear-gradient(to right, #fff, #eda0a3);
`;

export const HomepageWelcome = styled.div`
  ${CTAStyle}
  font-size: 2.2rem;
`;

export const HomepageCTA = styled.div`
  ${CTAStyle}
`;

export const HomepageLink = styled(Link)`
  link,
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    color: #983336;
    border-bottom: 0.2rem transparent solid;

    transition: transform 0.3s, border 0.3s;
  }

  &:hover,
  &:active {
    border-bottom: 0.2rem #983336 solid;
    transform: scale(1.05);
  }
`;
