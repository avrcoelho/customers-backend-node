const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)

const CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  birth: {
    type: Date
  },
  age: {
    type: Number,
    required: true
  },
  profission: {
    type: Number
  }
}, {
  timestamps: true

})

CustomerSchema.plugin(autoIncrement, { id: 'id_seq', inc_field: 'id' })

module.exports = mongoose.model('Customer', CustomerSchema)
