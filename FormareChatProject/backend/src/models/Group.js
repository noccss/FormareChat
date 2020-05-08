const { Schema, model } = require('mongoose');

const GroupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = model('group', GroupSchema);