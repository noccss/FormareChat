const Message = require('../models/Message');

module.exports = {
  async index (req, res) {
    const messages = await Message.find().populate('user');

    return res
      .status(200) // OK
      .json({ messages });
  },

  async create(req, res) {
    const { authorization: user } = req.headers;
    const { content } = req.body;

    const message = await Message.create({ content, user });

    req.io.emit('new_message', message);

    return res
      .status(201) // Created
      .json({ message });
  }
}