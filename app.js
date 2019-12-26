// "proxy": "http://localhost:5000"

// express app
const express = require("express");

// cookie-session handler
const cookieSession = require("cookie-session");

// passport lib
const passport = require("passport");

// pathfinder
const path = require("path");

// passport configuration
require("./controllers/passportController");

// routes
const authRouter = require("./routes/authRouter");

const app = express();

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
app.get("/", (req, res, next) => {
  if (req.user) return res.send(req.user);
  res.send("No currently logged in user.");
});

module.exports = app;
