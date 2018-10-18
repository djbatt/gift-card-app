const router = require("express").Router();
const serviceController = require('../../controllers/serviceController');

// Matches with "/api/service"
router.route("/")
  .post(serviceController.create) //Create a new business

router.route("/addcat") //Add categoryId to service
  .post(serviceController.addCatToService)

router.route("/cat") //Create category
  .post(serviceController.catCreate)

router.route("/addserv") //Add service ID to category
  .post(serviceController.addServiceToCat)

router.route("/getcats/:id")
  .get(serviceController.getCategories)
  .post(serviceController.getCatByName)

router.route("/:id")
  .get(serviceController.allServices)

router.route("/get/:id")
  .get(serviceController.getService)
module.exports = router;
