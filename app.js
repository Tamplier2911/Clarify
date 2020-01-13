const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const enforce = require("express-sslify");

// cookie-session handler
const cookieSession = require("cookie-session");

// passport lib
const passport = require("passport");

// passport configuration
require("./controllers/passportController");

// REFACTOR THAT *******************************************************
const User = require("./models/userModel");

// routes
const authRouter = require("./routes/authRouter");

const app = express();

// parse body of all request and convert it to json
app.use(bodyParser.json());

// url strings we getting in or passing out do not incontain things like spaces
app.use(bodyParser.urlencoded({ extended: true }));

// cross-origin-requests
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // compress all responsee bodies
  app.use(compression());

  // enforce https whenever http are made
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // serving static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // on request to any route that is not covered
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// run service worker on request
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

// setting cookie session with options
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SECRET],

    // Cookie Options
    maxAge: process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    httpOnly: true
    // secure: false for http && true for https
    // req.secure || req.headers["x-forwarded-proto"] === "https" ? true : false
  })
);

// initializing session in passport auth
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
// app.get("/", (req, res, next) => {
//   if (req.user) return res.send(req.user);
//   res.send("No currently logged in user.");
// });
app.use("/auth/google", authRouter);
// app.use('/api/v1/...', );
// app.use('/api/v1/...', );

// REFACTOR THAT *******************************************************
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, async (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      const currentUser = await User.findByIdAndUpdate(req.body.userId, {
        credits: req.body.price
      });
      res.status(200).send({ success: stripeRes });
    }
  });
});

module.exports = app;
