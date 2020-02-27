const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/scrape")
    .get(articlesController.scrapeArticles)

router.route("/myarticles")
    .post(articlesController.saveArticle)
    .get(articlesController.getSavedArticle)

router.route("/myarticles/:id")
    .delete(articlesController.deleteArticle)

    module.exports = router;