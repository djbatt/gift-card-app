const router = require("express").Router();
const giftController = require("../../controllers/giftController");

// Matches with "/api/gift"
router.route("/")
  .post(giftController.send)
  
module.exports = router;
