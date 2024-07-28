var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usermangement"
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id int NOT NULL,username varchar(255),email varchar(255),created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,PRIMARY KEY (ID))";
  con.query(sql, function (err, result)
    if (err) throw err;
    console.log("Table created");
  });