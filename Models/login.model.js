const { Joi } = require("celebrate");

module.exports = {
  body: {
    password: Joi.string().required(),
    username: Joi.string().required(),
  }
};
