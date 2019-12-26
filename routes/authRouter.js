const express = require("express");
const router = express.Router();

const {
  getGoogleAuth,
  getGoogleAuthLogout,
  getGoogleCb,
  getGoogleCbRedirect
} = require("../controllers/authController");

// log in / log out functionality
router.route("/login").get(getGoogleAuth);
router.route("/logout").get(getGoogleAuthLogout);

// cb / cb redirect
router.route("/cb").get(getGoogleCb, getGoogleCbRedirect);

module.exports = router;
