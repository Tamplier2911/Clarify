// express app
const express = require("express");

// authentication process
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// pathfinder
const path = require("path");

const app = express();

// make passport to take use of new instance of google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_PUBLIC,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
      callbackURL: "/auth/google/cb"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      // console.log(refreshToken);
      console.log(profile);
      // User.findOrCreate({ googleId: profile.id }, (err, user) => {
      //   return done(err, user);
      // });
    }
  )
);

// once we hit /auth/google - pop up google auth process
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// code that we need exchange to info with google server
// code is attached in query - req.query.code
app.get("/auth/google/cb", passport.authenticate("google"));

module.exports = app;
