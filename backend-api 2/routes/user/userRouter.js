const express = require("express"); // REQUIRE IN EXPRESS 
const router = express.Router(); // CALLING EXPRESS 

const { signup, login } = require("./controller/userController"); // REQUIRE IN USING A DESTRUCTED APPROACH - MULTIPLE FUNCTIONS ARE BEING USED IN ONE FILE VS ONE FUNCTION ONE FILE.

const checkIsUndefined = require("./helpers/checkIsUndefined"); // REQUIRE IN INDIVIDUAL FILES WITH ONE FUNCTION
const checkIsEmptyFunc = require("./helpers/checkIsEmptyFunc"); // REQUIRE IN ONE FUNCTION ONE FILE
const checkIsStrongPasswordFunc = require("./helpers/checkIsStrongPasswordFunc"); // REQUIRE IN ONE FUNCTION ONE FILE

const {
  checkIsEmailFunc, // CHECKS FUNCTION IF NO ERR MOVES ON WITH KEYWORD NEXT()
  checkIsAlphaFunc, // CHECK FUNCTION IF NO ERR MOVES ON WITH NEXT()
  checkIsAlphanumericFunc, // CHECK FUNCTION IF NO ERR MOVES ON WITH NEXT()
} = require("./helpers/authMiddleware"); // FILE PATH FOR FUNCTIONS

router.post(
  "/sign-up", // ROUTER 
  checkIsUndefined,// CHECKS IF NOT UNDEFINED 
  checkIsEmptyFunc,// CHECKS IF NOT AN EMPTY STRING
  checkIsStrongPasswordFunc,// CHECKS IS CORRECT PASSWORD FORMAT 
  checkIsEmailFunc,// CHECKS IF CORRECT EMAIL FORMAT
  checkIsAlphaFunc,// CHECKS IF ALPHA NO NUMBERS JUST CHAR
  checkIsAlphanumericFunc,// CHECKS IS ALPHA_NUMERIC NUMBERS AND CHAR ALLOWED FOR USERNAME 
  signup // USER IS ALLOWED TO SIGN-UP NOW
);

router.post(
  "/login",
  checkIsUndefined,// RECYCLED FUNCTIONS
  checkIsEmptyFunc,
  checkIsEmailFunc,
  login
);

module.exports = router;
