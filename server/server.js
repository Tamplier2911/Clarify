const dotenv = require("dotenv");

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./index");

// DB CONNECTION
/*
const database = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB Connection Successful!');
  });

*/

// SERVER
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}/ ...`);
});

process.on("unhandledRejection", err => {
  console.log("UNDANDLED REJECTION", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECIEVED. Shutting down...");
  server.close(() => {
    console.log("Process terminated...");
  });
});
