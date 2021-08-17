const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

const posts = [];

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/about", function(req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.get("/blog", function(req, res) {
  res.render("blog", {posts: posts});
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect("/blog");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server has started on port 3000.");
});
