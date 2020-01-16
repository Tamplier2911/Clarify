const express = require("express");
const path = require("path");

const morgan = require("morgan");

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const hpp = require("hpp");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const enforce = require("express-sslify");

// error handlers here

// routes
const paymentRouter = require("./routes/paymentRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
app.enable("trust proxy");

// cross-origin-requests
app.use(cors());
app.options("*", cors());

app.use(helmet());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in a hour."
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(mongoSanitize());
app.use(xss());
app.use(hpp({ whitelist: [] }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // CONSOLE LOG COOKIES ON EACH REQUEST
  console.log(req.cookies);
  next();
});

// ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/payment", paymentRouter);

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

module.exports = app;
