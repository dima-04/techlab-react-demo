const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  author: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  summary: {
    type: String
  },
  userId: {
    type: String,
    required: true
  }
});


const Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;