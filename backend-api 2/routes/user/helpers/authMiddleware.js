const {
  checkIsEmail,// FUNCTIONS FROM VALIDATOR
  checkIsAlpha,
  checkIsAlphanumeric,
} = require("../../utils/authMethods");

function checkIsEmailFunc(req, res, next) {// FUNCTION CHECK IF USER INPUTS CORRECT EMAIL FORMAT
  const { errorObj } = res.locals;

  if (!checkIsEmail(req.body.email)) { // IF NOT CHECK_IS_EMAIL FORMAT = SEND ERR MESSAGE
    errorObj.wrongEmailFormat = "Must be in email format!";
  }

  next(); // CALLS FOR NEXT FUNCTION
}

function checkIsAlphaFunc(req, res, next) { // CHECKS FOR ALPHA - USES VALIDATOR
  const { errorObj } = res.locals;
  const inComingData = req.body;// DATA FROM BODY OF POSTMAN
  for (key in inComingData) {// LOOP THROUGH WITH FOR OF LOOP -> CHECKING LASTNAME AND FIRSTNAME 
    if (key === "firstName" || key === "lastName") { // CHECKING FIRST AND LAST NAME DO NOT CONTAIN NUMBERS OR SPECIAL CHARACTERS
      if (!checkIsAlpha(inComingData[key])) { // VALIDATOR CHECK_IS_ALPHA FUNCTION 
        errorObj[`${key}`] = `${key} can only have characters`; // ERROR MESSAGE
      }
    }
  }

  next(); // CALLS FOR NEXT FUNCTION
}

function checkIsAlphanumericFunc(req, res, next) {// CHECKS IF USERNAME IS ALPHANUMERIC CANNOT HAVE SPECIAL CHARS ONLY NUMBERS
  const { errorObj } = res.locals;// 
  if (!checkIsAlphanumeric(req.body.username)) {// IF NOT ALPHANUMERIC SEND ERROR MESSAGE
    errorObj.usernameError = "username can only have characters and numbers";
  }

  next();// CALLS FOR NEXT FUNCTION
}

module.exports = {// EXPORTS THE FUNCTIONS FOR USE
  checkIsEmailFunc,
  checkIsAlphaFunc,
  checkIsAlphanumericFunc,
};
