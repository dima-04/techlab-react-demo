const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
    .get(articlesController.scrapeArticles)
    // .post(articlesController.saveArticle)

    module.exports = router;