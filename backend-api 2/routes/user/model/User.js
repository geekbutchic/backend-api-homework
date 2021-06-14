const mongoose = require("mongoose"); // MONGOOSE REQUIRED IN THE DRIVER OF MONGODB

const userSchema = new mongoose.Schema({ // USER SCHEMA - COOKIE CUTTER FOR NEW USER - NEW (KEYWORD)
  firstName: {
    type: String, // TYPES = STRING, BOOLEAN, NUMBERS, 
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    unique: true, // CHECKS ON SERVER SIDE - USERNAME CANNOT BE DUPLICATE  
  },
  email: {
    type: String,
    unique: true,// CHECKS ON SERVER SIDE - EMAIL CANNOT BE DUPLICATE
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);// EXPORTS USER SCHEMA 
