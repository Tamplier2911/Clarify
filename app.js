const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const enforce = require("express-sslify");

// cookie-session handler
const cookieSession = require("cookie-session");

// passport lib
const passport = require("passport");

// passport configuration
require("./controllers/passportController");

// routes
const authRouter = require("./routes/authRouter");
const paymentRouter = require("./routes/paymentRouter");

const app = express();

// parse body of all request and convert it to json
app.use(bodyParser.json());

// url strings we getting in or passing out do not incontain things like spaces
app.use(bodyParser.urlencoded({ extended: true }));

// cross-origin-requests
app.use(cors());

// setting cookie session with options
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SECRET],

    // Cookie Options
    maxAge: process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    httpOnly: true
    // secure: false for http && true for https
    // req.secure || req.headers["x-forwarded-proto"] === "https" ? true : false
  })
);

// initializing session in passport auth
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use("/auth/google", authRouter);
app.use("/api/v1/payment", paymentRouter);
// app.use('/api/v1/...', );

// run service worker on request
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

if (process.env.NODE_ENV === "production") {
  // compress all responsee bodies
  app.use(compression());

  // enforce https whenever http are made
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // serving static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // on request to any route that is not covered
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

module.exports = app;
