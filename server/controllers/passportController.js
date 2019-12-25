const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/userModel");

// token stuffed in a cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// get whatever in the cookie
passport.deserializeUser(async (id, done) => {
  try {
    const currentUser = await User.findById(id);
    done(null, currentUser);
  } catch (err) {
    done(err.message, null);
  }
});

// make passport to take use of new instance of google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_PUBLIC,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
      callbackURL: "/auth/google/cb",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
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
          done(null, newUser);
        }

        // if we get here - user already existed
        done(null, existingUser);
      } catch (err) {
        done(err.message, null);
      }
    }
  )
);
