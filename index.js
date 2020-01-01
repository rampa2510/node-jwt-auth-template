//========================================================================================
/*                                                                                      *
 *                          ALl the imports                                             *
 *                                                                                      */
//========================================================================================
// make sure to pass the NODE_ENV variable alongwith the command
const dotEnvConfig = { path: `.env.${process.env.NODE_ENV}` };

require("dotenv").config(dotEnvConfig);
const express = require("express");
const bodyParser = require("body-parser");
const { connect } = require("./Database/conn");
const logger = require("morgan");
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                                All the configurations                                *
 *                                                                                      */
//========================================================================================
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== "production") app.use(logger("dev"));

app.use("/", require("./routes"));
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                                   Start the server                                   *
 *                                                                                      */
//========================================================================================

// middleware to send error messages
app.use((error, req, res, next) => {
  if (error.joi) {
    return res.status(400).json({ error: error.joi.message });
  }

  return res.status(500).send(error);
});

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);

  // connect to mongodb
  try {
    const isMongoDbConnected = await connect();
  } catch (error) {
    console.log(error);
  }
});
//########################################################################################
