const router = require("express").Router();
const serviceController = require('../../controllers/serviceController');

// Matches with "/api/service"
router.route("/")
  .post(serviceController.create) //Create a new business

router.route("/get/:id")
  .get(serviceController.getService)

router.route("/:id")
  .get(serviceController.allServices)
module.exports = router;
