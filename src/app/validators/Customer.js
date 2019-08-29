const Joi = require('joi')

module.exports = {
  body: {
    firstName: Joi.string().required().max(30),
    lastName: Joi.string().required().max(30),
    cpf: Joi.string().required().max(11),
    birth: Joi.date().required()
  }
}
