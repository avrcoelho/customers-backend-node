const Joi = require('joi')

module.exports = {
  body: {
    firstName: Joi.string().required().max(30),
    lastName: Joi.string().required().max(30),
    birth: Joi.date().required()
  }
}
