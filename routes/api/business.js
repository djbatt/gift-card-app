const router = require("express").Router();
const businessController = require("../../controllers/businessController");

// Matches with "/api/business"
router.route("/")
  .post(businessController.create) //Create a new business

router.route("/many/:id")
  .get(businessController.getMany); //Get all business(s) from userID

router.route("/:id")
  .get(businessController.getBusiness) //Get business details from ID
  .delete(businessController.deleteBusiness) //Delete a business from ID
  .post(businessController.updateBusiness)

module.exports = router;
