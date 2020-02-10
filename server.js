const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');

const app = express();
const db = require("./config/keys").mongoURI;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  app.use(routes)


  const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

  app.listen(port, () => console.log(`Server up and running on port ${port} !`));