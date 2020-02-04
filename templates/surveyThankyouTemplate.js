module.exports = () => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Thank You So Much</title>
      <style>
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
        }
  
        body {
          font-family: sans-serif;
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
        }
  
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
  
          min-height: 100vh;
          align-items: center;
          justify-items: center;
        }
  
        .container {
          grid-column: center-start / center-end;
          color: #fff;
          text-align: center;
        }
  
        .heading {
            font-size: 8rem;
        }
  
        .message{
            font-size: 2rem;
        }
  
        ::selection {
            background-color: #f09999;
            color:#fff;
        }
  
        @media only screen and (max-width: 768px) {
          .heading {
            font-size: 6rem;
          }
          .message {
            font-size: 1.8rem;
          }
        }
  
        @media only screen and (max-width: 425px) {
          .heading {
            font-size: 4rem;
            line-height: 1.1;
            margin-bottom: 1.2rem;
          }
          .message {
            font-size: 1.6rem;
          }
        }
  
      </style>
    </head>
    <body>
      <div id="root">
        <div class="container">
          <div class="heading">Thank You!</div>
          <div class="message">You have participated in a survey and gained +100 to your karma!</h4>
        </div>
      </div>
    </body>
  </html>  
    `;
};
