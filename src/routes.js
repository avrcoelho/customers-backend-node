const express = require('express')
const validate = require('express-validation')
// pegar os erros que acontecem nas promises e enviar para dentro do exception handler
// envolva as chamadas de controler com o hendleh
const handle = require('express-async-handler')

const routes = express.Router()

const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.get('/customers',
  handle(controllers.CustomerController.index))
routes.get('/customers/:id',
  handle(controllers.CustomerController.show))
routes.post('/customers',
  validate(validators.Customer),
  handle(controllers.CustomerController.store))
routes.put('/customers/:id',
  validate(validators.Customer),
  handle(controllers.CustomerController.update))
routes.delete('/customers/:id',
  handle(controllers.CustomerController.destroy))

module.exports = routes
