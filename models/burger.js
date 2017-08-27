var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger, cb) {
    orm.insertOne("burgers", "burger_name", burger, function(res) {
      cb(res);
    });
  },
  update: function(burger, cb) {
    orm.updateOne("burgers", burger, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
