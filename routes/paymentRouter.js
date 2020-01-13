const express = require("express");
const router = express.Router();

const { postStripePayment } = require("../controllers/paymentController");
const { authorized } = require("../controllers/authController");

router.route("/").post(authorized, postStripePayment);

module.exports = router;
