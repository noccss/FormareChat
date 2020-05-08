const Consultor = require('../models/Consultor');

module.exports = {
  async create(req, res) {
    const { username, password } = req.body;

    let consultor = await Consultor.findOne({ username, password });
    let status = 200; // OK
 
    if (!consultor) {
      consultor = await Consultor.create({ username, password });
      status = 201; // Created
    }

    return res
      .status(status)
      .json({ consultor });
  }
};
