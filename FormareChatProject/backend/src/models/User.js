const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'cliente',
    required: true,
  },
  password: {
    type: String,
    required: function() {
      return this.type === 'consultor';
    }
  }
});

module.exports = model('user', UserSchema);