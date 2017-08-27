// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  host: "iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "a40y6jhywcn3b3om",
  password: "bvaak0pqr1ewnvr3",
  database: "burgers_db"
});

//timdb.cxwamrtpljtk.us-east-1.rds.amazonaws.com
//followtim
//db: gwcourse

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
