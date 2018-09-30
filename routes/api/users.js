const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .post(userController.create)
  .get(userController.findUser);

// Check if the user has business
router.route("/ifb/:id")
  .get(userController.ifHasBusiness);

// Add a business to user
router.route("/addbusiness/:id")
  .post(userController.addBusinessToUser);

// Matches with "/api/users/:oktaUnique"
router.route("/:oktaUnique")
  .get(userController.ifExists);
module.exports = router;
