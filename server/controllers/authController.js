const passport = require("passport");

// once we hit /auth/google - pop up google auth process
exports.getGoogleAuth = passport.authenticate("google", {
  scope: ["profile", "email"]
});

// code that we need exchange to info with google server
// code is attached in query - req.query.code
exports.getGoogleCb = passport.authenticate("google");

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
