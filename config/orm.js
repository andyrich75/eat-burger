var connection = require("../config/connection.js");
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }
  
  var orm = {
    all: function(cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(burger, cb) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      console.log(queryString);
  
      connection.query(queryString, [burger], function (err, result)  {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    update: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
  
      console.log(queryString);
      connection.query(queryString, [id], function (err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    delete: function(table, condition, cb){
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, result){
        if(err){
          throw err;
        }
        cb(result);
      })
    }
  };
module.exports = orm;