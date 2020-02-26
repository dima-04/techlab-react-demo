const router = require("express").Router();
const articlesRoutes = require("./articles");
const usersRoutes = require("./users");

router.use("/user", usersRoutes);
router.use("/articles", articlesRoutes);

module.exports = router;