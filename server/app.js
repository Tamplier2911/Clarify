// express app
const express = require("express");

// pathfinder
const path = require("path");

// passport configuration
require("./controllers/passportController");

// routes
const authRouter = require("./routes/authRouter");

const app = express();

// ROUTES
app.use("/auth/google", authRouter);

module.exports = app;
