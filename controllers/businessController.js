const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Business
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  ifBusinessExists: function(req, res) {
    db.Business.find({user: req.params.id}, {user: 1}).limit(1)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
