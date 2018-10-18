const db = require("../models");

module.exports = {
  create: function (req, res) { //Create a new business
    db.Service
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  catCreate: function(req, res) { // Create category
    db.Category
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  addCatToService: function(req, res) {
    db.Service
    .update({_id: req.body.serviceId}, {$set: {category: req.body.categoryId}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  addServiceToCat: function(req, res) {
    db.Category
    .update({_id: req.body.categoryId}, {$push: {services: req.body.serviceId}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getCategories: function(req, res) {
    db.Category
    .find({business: req.params.id})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getCatByName: function(req, res) {
    db.Category
    .find({business: req.params.id, category: req.body.category})
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
