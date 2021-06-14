const {// REQUIRE IN VALIDATOR FOR FUNCTIONS TO USE
  isEmpty,
  isStrongPassword,
  isEmail,
  isAlpha,
  isAlphanumeric,
} = require("validator");

const checkIsEmpty = (target) => (isEmpty(target) ? true : false); //CHECKS IF PASSWORD IS EMPTY WITH A TERNARY STATEMENT USING VALIDATOR - CHECKING IF IT'S UNDEFINED ONE OF THE TWO FALSEY VALUES.

const checkIsStrongPassword = (password) => isStrongPassword(password) ? true : false; //CHECKS IF STRONG PASSWORD
// REFACTORED VERSION REQUIRING IN VALIDATOR USING ARROW FUNCTIONS

const checkIsEmail = (email) => (isEmail(email) ? true : false); //SAME: CHECKS IS EMAIL USING ARROW FUNCTIONS WITH A TERNARY RETURNING TRUE OR FALSE WITH VALIDATOR

const checkIsAlpha = (target) => (isAlpha(target) ? true : false);//CHECKS IF ALPHA WITH TERNARY STATEMENT - ONLY CHARACTERS ALLOWED 

const checkIsAlphanumeric = (target) => (isAlphanumeric(target) ? true : false);// CHECKS IF ALPHANUMERIC WITH A TERNARY FUNCTION ONLY NUMBERS AND CHAR.

module.exports = {// EXPORTS THE FUNCTIONS
  checkIsEmpty,
  checkIsStrongPassword,
  checkIsEmail,
  checkIsAlpha,
  checkIsAlphanumeric,
};