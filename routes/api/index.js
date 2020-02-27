const router = require("express").Router();
const articlesRoutes = require("./articles");
const usersRoutes = require("./users");

router.use("/users", usersRoutes);
router.use("/articles", articlesRoutes);

module.exports = router;