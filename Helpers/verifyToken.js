//========================================================================================
/*                                                                                      *
 *                              Import all the dependencies                             *
 *                                                                                      */
//========================================================================================
const { verify } = require("jsonwebtoken");
//########################################################################################

module.exports = authHeader => {
  const token = authHeader.split(" ")[1];

  try {
    const decodedData = verify(token, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });

    return decodedData;
  } catch (error) {
    return error.name
  }
};
