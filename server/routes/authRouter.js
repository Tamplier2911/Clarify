const express = require("express");
const router = express.Router();

const { getGoogleAuth, getGoogleCb } = require("../controllers/authController");

router.route("/").get(getGoogleAuth);

router.route("/cb").get(getGoogleCb);

module.exports = router;
