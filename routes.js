//========================================================================================
/*                                                                                      *
 *             Import dependencies and configure express router                         *
 *                                                                                      */
//========================================================================================
const express = require("express"),
  router = express.Router(),
  { celebrate } = require("celebrate");
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                            Import all the Controllers                                *
 *                                                                                      */
//========================================================================================
let controllerPath = "./Controllers";
const registrationController = require(`${controllerPath}/Registration`);
const loginController = require(`${controllerPath}/Login`);
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                                 Import all the models                                *
 *                                                                                      */
//========================================================================================
let ModelPath = "./Models";
const registrationModel = require(`${ModelPath}/regestration.model`);
const loginModel = require(`${ModelPath}/login.model`);
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                             Configure all the routes here                            *
 *                                                                                      */
//========================================================================================

router.post("/register", celebrate(registrationModel), registrationController);
router.post("/login", celebrate(loginModel), loginController);
//########################################################################################

module.exports = router;
