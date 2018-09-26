const router = require("express").Router();
const userRoutes = require("./users");
const businessRoutes = require("./business");

// Book routes
router.use("/users", userRoutes);
router.use("/business", businessRoutes);

module.exports = router;
