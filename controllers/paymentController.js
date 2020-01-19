const stripe = require("stripe")(process.env.STRIPE_SECRET);
const User = require("../models/userModel");

// https://stripe.com/docs/api/charges/create
exports.postStripePayment = async (req, res, next) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
    description: req.body.token.email
  };
  await stripe.charges.create(body, async (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      try {
        await User.findByIdAndUpdate(
          req.user._id,
          {
            credits: req.user.credits + req.body.price
          },
          {
            new: true,
            runValidators: true
          }
        );
        res.status(200).send({ success: stripeRes });
      } catch (error) {
        console.log(error.message, "Something wrong with DB query!");
      }
    }
  });
};
