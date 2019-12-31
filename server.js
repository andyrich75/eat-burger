var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

//const dotenv = require('dotenv');
const path = require('path');
//dotenv.config({path: path.resolve(__dirname, './config/.env')})

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger.js");

app.use(routes);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });