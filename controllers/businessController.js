const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Business
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getBusiness: function(req, res) {
    db.Business
    .find({_id: req.params.id}).limit(1)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
