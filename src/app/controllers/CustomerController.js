const Customer = require('../models/Customer')

class CustomerController {
  async index (req, res) {
    const customers = await Customer.find({})

    return res.json(customers)
  }

  async show (req, res) {
    const { id } = req.params

    const customer = await Customer.findOne({ id })

    return res.json(customer)
  }

  async store (req, res) {
    const { cpf } = req.body

    const isExist = await Customer.findOne({ cpf })

    if (isExist) {
      return res.status(400).json({
        error: 'customer already exists'
      })
    }

    const customer = await Customer.create(req.body)

    return res.json(customer)
  }

  async update (req, res) {
    const { id } = req.params

    const customer = await Customer.findOneAndUpdate({ id }, req.body, {
      new: true
    })

    return res.json(customer)
  }

  async destroy (req, res) {
    const { id } = req.params

    await Customer.findOneAndDelete({ id })

    return res.send()
  }
}

module.exports = new CustomerController()
