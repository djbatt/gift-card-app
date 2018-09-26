const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .post(userController.create);

//Matches with "/api/users/:oktaUnique"
router.route("/:oktaUnique")
  .get(userController.ifExists);

module.exports = router;
