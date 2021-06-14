require("dotenv").config();// REQUIRE IN DOTENV USED TO HASH FILES

const mongoose = require("mongoose"); // REQUIRE IN MONGOOSE DRIVER FOR MONGODB

const app = require("./app"); // PATH FOR APP.JS

const port = 3000;// SET PORT TO 3000 

mongoose
  .connect(process.env.MONGO_DB, {//CONNECT TO MONGODB 
    useNewUrlParser: true, // FLAGS FOR MONGODB 
    useUnifiedTopology: true, 
  })
  .then(() => {
    app.listen(port, () => {// CALL APP.LISTEN
      console.log(`Server connected on ${port}`);//LOGS SERVER STARTED 
      console.log("MongoDB Connected");//LOGS MONGODB CONNECTED IMPORTANT BEFORE WORKING ON APP
    });
  })
  .catch((e) => {//CATCH BLOCK IF ERROR 
    console.log(e);
  });
