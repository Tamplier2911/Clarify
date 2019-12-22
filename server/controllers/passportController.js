const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/userModel");

// make passport to take use of new instance of google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_PUBLIC,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
      callbackURL: "/auth/google/cb"
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);

      const {
        displayName,
        id,
        _json: { picture, email, email_verified }
      } = profile;

      try {
        // check if user already registred
        const existingUser = await User.findOne({ googleId: id });

        // else add user to data-base
        if (!existingUser) {
          const newUser = await User.create({
            name: displayName,
            googleId: id,
            photo: picture,
            emailConfirmed: email_verified,
            email
          });
          // if we get here we got newly created user
          console.log(newUser, "I am freshie");
          done(null, newUser);
        }

        // if we get here - user already existed
        console.log(existingUser, "I am old");
        done(null, existingUser);
      } catch (err) {
        console.log("Error from passportController, Google Strategy OAuth!");
      }

      // User.findOrCreate({ googleId: profile.id }, (err, user) => {
      //   return done(err, user);
      // });
    }
  )
);
