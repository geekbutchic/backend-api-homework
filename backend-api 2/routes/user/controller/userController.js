const bcrypt = require("bcryptjs"); // REQUIRE IN BCRYPT WHICH ENCRYPTS OUR DATA
const User = require("../model/User"); // PATH FOR USER SCHEMA (A COOKIE CUTTER OF OUR USER)

const jwt = require("jsonwebtoken");// 

async function signup(req, res) {// ASYNC FUNCTION USED FOR SIGNUP 
  const { username, email, password, firstName, lastName } = req.body; // WHAT IS COMING FROM THE BODY 

  const { errorObj } = res.locals; // OUR EMPTY OBJECT 

  if (Object.keys(errorObj).length > 0) { // OBJECT.KEYS(ERROROBJ).LENGTH PRODUCES ZERO - SEND ERR MESSAGE IF NOT GREATER THAN ZERO
    return res.status(500).json({ message: "failure", payload: errorObj }); // ERROR MESSAGE IF NO VALUE INSIDE
  }

  try { // TRY BLOCK FOR ASYNC FUNCTION
    let salt = await bcrypt.genSalt(12);// INTERMEDIATE VARIABLE SALT IS ADDED (ENCRYPTION OF 12)
    let hashedPassword = await bcrypt.hash(password, salt); // PASSWORD NOW HAS SALT (FULLY ENCRYPTED)

    const createdUser = new User({// NEW USER KEYWORD (NEW) 
      firstName, // DESTRUCTED PULLING IN THE INFORMATION FROM UP TOP { USERNAME, EMAIL, PASSWORD, ETC }
      lastName, 
      email,
      username,
      password: hashedPassword, // SALT APPLIED TO USERS PASSWORD
    });

    let savedUser = await createdUser.save(); // THIS IS AN INTERMEDIATE VARIABLE WITH A NEW SAVED USER ADDED TO DB

    res.json({ message: "success", data: savedUser }); // MESSAGE SUCCESS PAYLOAD OF NEW USER IS RETURNED 
  } catch (e) { // CATCH ERROR BLOCK IF (ERR) RETURN ERROR MESSAGE
    console.log(e);
    console.log(e.message);
    res.json({ message: "error", error: e });// ERROR MESSAGE FROM CATCH (ERR) BLOCK
  }
}

async function login(req, res) { // ASYNC FUNCTION FOR LOGIN 
  const { email, password } = req.body; // WHAT IS COMING FROM THE BODY IN OUR POSTMAN

  const { errorObj } = res.locals; // EMPTY OBJECT 

  if (Object.keys(errorObj).length > 0) { // CHECKING TO SEE IF ERROR OBJ LENGTH IS GREATER THAN ZERO
    return res.status(500).json({ message: "failure", payload: errorObj });// ERR MESSAGE IF NOT GREATER THAN ZERO
  }

  try {
    let foundUser = await User.findOne({ email: email });// CHECK USER WITH EMAIL

    if (!foundUser) {
      res.status(400).json({
        message: "failure",
        payload: "Please check your email and password",// ERROR MESSAGE IF USER IS NOT FOUND
      });
    } else {
      //password = 1, foundUser.password = $2a$12$tauL3AEb5gvKdcQdDKNWLeIYv422jNq2aRsaNWF5J4TdcWEdhq4CO
      let comparedPassword = await bcrypt.compare(password, foundUser.password);

      if (!comparedPassword) {
        res.status(400).json({
          message: "failure",
          payload: "Please check your email and password",
        });
      } else {
        let jwtToken = jwt.sign(// TOKEN GIVEN TO USER
          {
            email: foundUser.email,
            username: foundUser.username,
          },
          process.env.PRIVATE_JWT_KEY,// KEY THAT IS HIDDEN WITH .ENV
          {
            expiresIn: "1d",
          }
        );

        res.json({ message: "success", payload: jwtToken });
      }
    }
  } catch (e) { // CATCH BLOCK SENDS OUT ERR MESSAGE
    res.json({ message: "error", error: e });
  }
}

module.exports = { signup, login }; // THE FUNCTIONS THAT ARE BEING EXPORTED 
