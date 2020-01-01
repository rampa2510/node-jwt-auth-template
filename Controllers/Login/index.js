//========================================================================================
/*                                                                                      *
 *                                import helper functions                               *
 *                                                                                      */
//========================================================================================
const hashPass = require("../../Helpers/hashPassword");
const { findOne } = require("../../Helpers/queryHandler");
const verifyToken = require("../../Helpers/verifyToken");
//########################################################################################

module.exports = async (req, res, next) => {
  try {
    let resp = verifyToken(req.headers.authorization);

    if (res === "TokenExpiredError") {
      res.status(401).json({ message: "Session expired please login again" });
      return;
    }
    const { password, username } = req.body;

    const { hash, salt } = await findOne("users", { username });

    const hashedPass = hashPass(password, salt);
    // console.log(hash,hashedPass)

    if (hashedPass.hash === hash) {
      res.status(200);
    } else {
      res.status(400).json({ message: "Invalid details" });
    }
    res.end()
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};
