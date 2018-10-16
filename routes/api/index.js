const router = require("express").Router();
const userRoutes = require("./users");
const businessRoutes = require("./business");
const giftRoutes = require("./gift");

// Book routes
router.use("/users", userRoutes);
router.use("/gift", giftRoutes);
router.use("/business", businessRoutes);

module.exports = router;
