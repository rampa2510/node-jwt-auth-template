//========================================================================================
/*                                                                                      *
 *                                import helper functions                               *
 *                                                                                      */
//========================================================================================
const hashPass = require("../../Helpers/hashPassword");
const { findOne, insertOne } = require("../../Helpers/queryHandler");
const { sign } = require("jsonwebtoken");
//########################################################################################

module.exports = async (req, res, next) => {
  const { username, password, name, address } = req.body;
  const {salt,hash} = hashPass(password);

  try {
    const doesUsernameExist = await findOne("users", { username });

    if (doesUsernameExist) {
      res.status(409).json({ message: "Username already exists" });
      return;
    }

    const userData = await insertOne("users", {
      hash,
      username,
      name,
      address,
      salt
    });

    delete userData.password;

    const token = sign(userData, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY
    });

    res.status(200).json({ message: "User Added!", token });
    next();
  } catch (error) {
    res.status(500).json({ err });
    console.log(err);
    next();
  }
};
