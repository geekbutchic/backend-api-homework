const express = require("express"); // REQUIRE IN EXPRESS 
const logger = require("morgan"); // REQUIRE IN MORGAN LOGGER FOR TERMINAL

const app = express();// CALL EXPRESS 

const userRouter = require("./routes/user/userRouter"); // PATH FOR USING USER-ROUTER 

app.use(logger("dev"));// PART OF REQUIRING MORGAN

app.use(express.json());// REQUIRE IN TO PARSE JSON

app.use(express.urlencoded({ extended: false }));// PARSING FORM DATA/INCOMING DATA

app.use("/api/user", userRouter);// PATH FOR USER-ROUTER WORKS IN TANDEM WITH USER-CONTROLLER

module.exports = app;// EXPORTING APP
