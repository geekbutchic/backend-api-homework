const { checkIsStrongPassword } = require("../../utils/authMethods");//REQUIRE IN TO USE VALIDATOR

function checkIsStrongPasswordFunc(req, res, next) { // FUNCTION CHECKS PASSWORD USING VALIDATOR
  const { errorObj } = res.locals; // EMPTY OBJECT - CHECKS FOR NO INPUT BEING PASSED
  if (!checkIsStrongPassword(req.body.password)) { // USES VALIDATOR 'CHECK_IS_STRONG_PASSWORD' IMPLEMENTED 
    errorObj.weakPassword =
      "Password must include 1 lowercase, 1 uppercase, 1 special character, 1 number, and a length of 8"; // ERROR MESSAGE IF USER TYPES IN WEAK PASSWORD AND GIVES CRITERIA.
  }
  next();//CALLS FOR THE NEXT FUNCTIONS IF NO ERRORS.
}
module.exports = checkIsStrongPasswordFunc;
