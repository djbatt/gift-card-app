const db = require("../models");

module.exports = {
  //Create user
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //Find user by ID happens 
  findUser: function (req, res) {
    db.User
      .find({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).son(err));
  },

  //Check if user exists, using oktaId
  ifExists: function (req, res) {
    db.User
      .find({ oktaUnique: req.params.oktaUnique }, { oktaUnique: 1 }).limit(1)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //See if user has a business
  ifHasBusiness: function (req, res) {
    db.User.find({ _id: req.params.id }, { business: 1 }).limit(1) // using this syntax it checks for a business based on the businessId an then only shows that field
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //Add a businessId to the user
  addBusinessToUser: function (req, res) {
    db.User
      .update({ _id: req.params.id }, { $push: { business: req.body.businessId } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
