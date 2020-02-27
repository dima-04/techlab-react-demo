const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/scrape")
    .get(articlesController.scrapeArticles)

router.route("/myarticles")
    .post(articlesController.saveArticle)
    .get(articlesController.getSavedArticle)

    module.exports = router;