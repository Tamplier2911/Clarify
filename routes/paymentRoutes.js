const express = require("express");
const router = express.Router();

const { postStripePayment } = require("../controllers/paymentController");

const { protect } = require("../controllers/authController");

router.route("/").post(protect, postStripePayment);

module.exports = router;
