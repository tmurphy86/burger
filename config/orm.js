var connection = require("./connection.js");


var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
      callback(result);
    });
  },
  updateOne: function(table, val, callback) {
    var queryString = "UPDATE "+table+" SET devoured = NOT devoured WHERE "+ val;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      console.log(result);
      callback(result);
    });
  },
  insertOne: function(table, col, val, callback) {
    var queryString = "INSERT INTO "+table+" ("+ col +") VALUES ('"+val+"')";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      console.log(result);
      callback(result);
    });
  }
};

module.exports = orm;