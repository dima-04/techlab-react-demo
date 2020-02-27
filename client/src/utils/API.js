import axios from "axios";


export default {
  getArticles: function () {
    return axios.get("/api/articles");
  },
  registerUser: function(data) {
    return axios.post("/api/users/register", data);
  },
  login: function(data) {
    return axios.post("/api/users/login", data);
  }
}