const db = require("../models");

module.exports = {
  create: function (req, res) { //Create a new business
    db.Service
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getService: function (req, res) {
    db.Service
      .find({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  allServices: function (req, res) {
    db.Service
      .find({ business: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
