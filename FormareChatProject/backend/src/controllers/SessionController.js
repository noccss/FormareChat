const User = require('../models/User');

module.exports = {
  async create(req, res) {
    const { username } = req.body;

    let user = await User.findOne({ username });
    let status = 200; // OK
 
    if (!user) {
      user = await User.create({ username });
      status = 201; // Created
    }

    return res
      .status(status)
      .json({ user });
  }
};
