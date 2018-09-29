const router = require("express").Router();
const businessController = require("../../controllers/businessController");

// Matches with "/api/business"
router.route("/")
  .post(businessController.create)

router.route("/:id")
  .get(businessController.getBusiness);

module.exports = router;
