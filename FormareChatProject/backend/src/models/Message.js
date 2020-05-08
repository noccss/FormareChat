const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = model('message', MessageSchema);