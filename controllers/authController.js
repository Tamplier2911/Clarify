const passport = require("passport");

// once we hit /auth/google - pop up google auth process
exports.getGoogleAuth = passport.authenticate("google", {
  scope: ["profile", "email"]
});

// perform logout and redirect to root
exports.getGoogleAuthLogout = (req, res, next) => {
  req.logOut();
  res.redirect("/");
};

// code that we need exchange to info with google server
// code is attached in query - req.query.code
exports.getGoogleCb = passport.authenticate("google", { failureRedirect: "/" });

// redirect to root
exports.getGoogleCbRedirect = (req, res, next) => res.redirect("/");

// recieve user object if user is logged in
exports.getUserObject = (req, res, next) => res.send(req.user);
