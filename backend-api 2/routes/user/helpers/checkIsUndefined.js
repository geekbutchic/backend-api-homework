function checkIsUndefined(req, res, next) {// CHECKS FOR UNDEFINED ONE OF THE PRE CHECKS FOR EITHER AN "" AND UNDEFINED
  if (Object.keys(req.body).length === 0) {// OBJECT.KEYS(REQ.BODY).LENGTH IF NO INPUT RETURNS 0
    return res.status(500).json({ message: "Please fill out the form" });//THIS TRIGGERS ERROR MESSAGE
  } else {
    let errorObj = {};
    res.locals.errorObj = errorObj;
    next(); // CALLS FOR NEXT FUNCTION
  }
}

module.exports = checkIsUndefined;
