import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    // TYPOGRAPHY
    --font-title: "Open Sans", sans-serif;
    --font-text: "Lato", sans-serif;
  
    // COLOR PALET
    --cl-black: #000;
    --cl-white: #fff;
    --cl-grey: #a1a1a1;
    --cl-font: #333;
    --cl-primary: #df4c4c;
  
    // BREAKPOINTS
    --bp-tablet: 48em;
    --bp-mobile: 26.563em;
    // 768px / 16px = 48em
    // $tablet: 48em;
    // 425px / 16px = 26.5625em
    // $mobile: 26.563em;
  }
  
  // BASE
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  
    @media only screen and (max-width: 48em) {
      font-size: 56.25%;
    }
  
    @media only screen and (max-width: 26.563em) {
      font-size: 50%;
    }
  }
  // 100% / 16px * 10px = 1rem = 62.5% 10px
  // 100% / 16px * 9px = 1rem = 56.25% 9px
  // 100% / 16px * 8px = 1rem = 50% 8px
  
  body {
    font-family: var(--font-text), sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--cl-font);
  
    background-image: linear-gradient(to bottom right, #df4c4c, #e29999);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  
    min-height: 100vh;
    min-width: 100vw;
  
    overflow-x: hidden;
  
    &::-webkit-scrollbar {
      width: 0.8rem;
      background-color: #2834930c;
      // border-radius: 5rem;
    }
  
    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(to bottom, #ffcccc, #ff5555);
      border-radius: 5rem;
    }
  
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px #0000004d;
      box-shadow: inset 0 0 6px #0000004d;
    }
  }
  
  // SELECTION
  
  ::selection {
    // background-color: var(--cl-primary);
    background-color: #f09999;
    color: var(--cl-white);
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  @mixin clearFix {
    ::after {
      display: table;
      content: "";
      clear: both;
    }
  }
  
  #modal {
    display: none;
  }
  
  // root grid definitions
  #root {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns:
      [full-start] minmax(4rem, 1fr)
      [center-start] repeat(
        10,
        [col-start] minmax(min-content, 11.7rem) [col-end]
      )
      [center-end] minmax(4rem, 1fr) [full-end];
  
    @media only screen and (max-width: 26.563em) {
      grid-template-columns:
        [full-start] 1fr
        [center-start] repeat(
          10,
          [col-start] minmax(min-content, 11.7rem) [col-end]
        )
        [center-end] 1fr [full-end];
    }
  }  
`;
