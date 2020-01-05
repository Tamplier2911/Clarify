import styled from "styled-components";
// import styled, { css } from "styled-components";

export const ContainerUl = styled.ul`
  list-style: none;
  text-transform: uppercase;
  font-weight: 700;
`;

export const DecorationDiv = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #fff;
`;

export const FeatureItem = styled.li`
  font-weight: 300;
  text-transform: none;
`;

export const FeatureLink = styled.a`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #fff
    transition: color 0.3s, border 0.3s;
    border-bottom: .1rem transparent solid;
  }

  &:hover,
  &:active {
    color: #fff;
    border-bottom: .1rem #fff solid;
  }

  &:hover :first-child {
    fill: #fff;
  }
`;
