import axios from "axios";

export default {
  getArticles: function () {
    return axios.get("/api/articles/scrape");
  },
  getSavedArticles: function(userId) {
    return axios.get("/api/articles/myarticles?userId=" + userId);
  },
  saveArticle: function(article) {
    return axios.post("/api/articles/myarticles", article);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/myarticles/" + id);
  },
  registerUser: function(data) {
    return axios.post("/api/users/register", data);
  },
  login: function(data) {
    return axios.post("/api/users/login", data);
  }
}