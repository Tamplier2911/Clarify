const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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
