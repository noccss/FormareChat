const { Schema, model } = require('mongoose');

const ConsultSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'consultor',
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = model('consultor', ConsultSchema);