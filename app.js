const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// cookie-session handler
const cookieSession = require("cookie-session");

// passport lib
const passport = require("passport");

// passport configuration
require("./controllers/passportController");

// routes
const authRouter = require("./routes/authRouter");

const app = express();

// bundle compressions
app.use(compression());

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
// app.get("/", (req, res, next) => {
//   if (req.user) return res.send(req.user);
//   res.send("No currently logged in user.");
// });
app.use("/auth/google", authRouter);
// app.use('/api/v1/...', );
// app.use('/api/v1/...', );

module.exports = app;
