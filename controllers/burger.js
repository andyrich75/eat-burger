var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function (data) {
    var burgersObj = {
        burgers: data
    };
    console.log(burgersObj);
    res.render("index", burgersObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function () {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;

  console.log("id", id);

  burger.update(id, function () {
    //  res.redirect("/");
  });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result){
      if (result.affectedRows == 0){
        return res.status(404).end()
      }else{
        res.status(200).end
      }
    });
    });

module.exports = router;
