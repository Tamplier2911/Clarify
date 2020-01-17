import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/svg/clarify-logo.svg";
import { ReactComponent as LogOut } from "../../assets/svg/logout.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as Accounts } from "../../assets/svg/accounts.svg";
import { ReactComponent as Reports } from "../../assets/svg/report.svg";
import { ReactComponent as Profiles } from "../../assets/svg/profiles.svg";
import { ReactComponent as Actions } from "../../assets/svg/actions.svg";
import { ReactComponent as Management } from "../../assets/svg/management.svg";
import { ReactComponent as History } from "../../assets/svg/history.svg";

const svgstyle = css`
  width: 1.6rem;
  height: 1.6rem;
  fill: var(--cl-font);
  margin-right: 1rem;
  transition: fill 0.3s;
`;

const svgstyle2 = css`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
  fill: #e9e9e9;

  transition: fill 0.3s;
`;

export const AccountsSVG = styled(Accounts)`
  ${svgstyle}
`;

export const ReportsSVG = styled(Reports)`
  ${svgstyle}
`;

export const ProfilesSVG = styled(Profiles)`
  ${svgstyle}
`;

export const ActionsSVG = styled(Actions)`
  ${svgstyle}
`;

export const ManagementSVG = styled(Management)`
  ${svgstyle}
`;

export const HistorySVG = styled(History)`
  ${svgstyle}
`;

export const LogOutSVG = styled(LogOut)`
  ${svgstyle2}
`;

export const ArrowSVG = styled(Arrow)`
  ${svgstyle2}
`;

export const NavContainer = styled.nav`
  grid-column: 1 / 2;
  grid-row: 1 / -1;

  // background-image: url("../../assets/jpg/navbg.jpg");
  background-position: center;
  background-size: cover;
  color: #e9e9e9;
  // filter: blur(5px);
  // -webkit-filter: blur(8px);

  z-index: 10;
  box-shadow: 0.2rem 0.2rem 0.4rem #00000067;

  @media only screen and (max-width: 48em) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`;

export const NavWrapper = styled.div`
  min-height: 100%;
  background-image: linear-gradient(#ffffffd8, #e6606b83);

  display: grid;
  grid-auto-rows: min-content;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-decoration: none;
  color: #f95a5a;
  font-size: 2rem;
  padding: 0 0 1rem 0;
`;

export const LogoSVG = styled(Logo)`
  height: 20rem;
  width: 20rem;

  // @media only screen and (max-width: 48em) {
  //   font-size: 56.25%;
  // }

  @media only screen and (max-width: 26.563em) {
    height: 12rem;
    width: 12rem;
  }
`;

export const NavAction = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  background-image: linear-gradient(#00000070, #00000070);
  padding: 1rem 0rem;
`;

export const NavAnchors = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    color: #e9e9e9;
    font-weight: 300;
    text-decoration: none;
    white-space: nowrap;

    transition: color 0.3s;
  }

  &:hover,
  &:active {
    color: #f3b0b0;
  }

  &:hover :first-child {
    fill: #f3b0b0;
  }
`;

export const NavPillar = styled.div`
  width: 0.1rem;
  height: 2rem;
  background-color: #e9e9e9;
`;

export const NavFeatures = styled.div`
  display: grid;
  align-items: center;
  grid-row-gap: 4rem;

  @media only screen and (max-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }

  color: var(--cl-font);
  padding: 4rem 2rem 2rem 2rem;
`;
