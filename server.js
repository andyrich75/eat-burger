var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs  = require('express-handlebars');


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });