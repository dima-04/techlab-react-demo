var cheerio = require("cheerio");
var axios = require("axios");
const db = require("../models");

module.exports = {
  scrapeArticles: function (req, res) {

    axios.get("https://www.nytimes.com/section/technology").then(function (response) {

      // Load the HTML into cheerio and save it to a variable
      // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
      var $ = cheerio.load(response.data);

      const articles = [];

      // With cheerio, find each p-tag with the "title" class
      // (i: iterator. element: the current element)
      $("li.css-ye6x8s").each(function (i, element) {

        // Save the text of the element in a "title" variable
        var title = $(element).find("h2").text();
        var summary = $(element).find("p").text();

        // In the currently selected element, look at its child elements (i.e., its a-tags),
        // then save the values for any "href" attributes that the child elements may have
        var link = "https://www.nytimes.com/" + $(element).find("a").attr("href");

        // Save these results in an object that we'll push into the results array we defined earlier
        // db.Article.create({
        //   _id: id,
        //   title: title,
        //   link: link,
        //   summary: summary
        // });
        articles.push({
          title: title,
          link: link,
          summary: summary
        })
      });

      res.send(articles)
    });
  },
  getSavedArticle: function (req, res) {
    db.Articles
    .find({userId: req.query.userId})
    .then(dbArticles => res.json(dbArticles))
    .catch(err => res.status(422).json(err));
  },
  saveArticle: function (req, res) {
    db.Articles
    .create(req.body)
    .then(dbArticlesModel => res.json(dbArticlesModel))
    .catch(err => res.status(422).json(err));
  },
  deleteArticle: function(req, res) {
    db.Articles
      .findById({ _id: req.params.id })
      .then(dbArticlesModel => dbArticlesModel.remove())
      .then(dbArticlesModel => res.json(dbArticlesModel))
      .catch(err => res.status(422).json(err));
  }
};