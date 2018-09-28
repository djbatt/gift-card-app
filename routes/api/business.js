const router = require("express").Router();
const businessController = require("../../controllers/businessController");

// Matches with "/api/business"
router.route("/")
  .post(businessController.create);

router.route("/:id")
  .get(businessController.ifBusinessExists);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
