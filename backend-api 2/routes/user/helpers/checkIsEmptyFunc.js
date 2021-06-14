const { checkIsEmpty } = require("../../utils/authMethods");// PATH FOR TO REQUIRE IN CHECK_IS_EMPTY FUNCTION

//this function checks any incoming data is empty if is empty send error message back
//else go to the next middleware function next()
function checkIsEmptyFunc(req, res, next) { // FUNCTION CHECKS ANY INCOMING DATA AND SENDS MESSAGE IF ERROR
  let inComingData = req.body; // COMING FROM BODY OF POSTMAN

  const { errorObj } = res.locals; 

  for (let key in inComingData) {
    if (checkIsEmpty(inComingData[key])) { // USES CHECK IF EMPTY FUNCTION 
      errorObj[key] = `${key} cannot be empty`;
    }
  }
  // OBJECT_KEYS(ERROR_OBJ).LENGTH RETURNS -> 0
  if (Object.keys(errorObj).length > 0) { // IF NOT GREATER THAN ZERO - MEANING NO INPUT RETURN ERR MESSAGE
    return res.status(500).json({ message: "failure", payload: errorObj });
  } else {
    next(); // CALLS FOR NEXT FUNCTION
  }
}

module.exports = checkIsEmptyFunc;// EXPORTS FUNCTION
