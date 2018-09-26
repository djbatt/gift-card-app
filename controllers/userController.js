const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  ifExists: function(req, res) {
    db.User
    .find({oktaUnique: req.params.oktaUnique}, {oktaUnique: 1}).limit(1)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
