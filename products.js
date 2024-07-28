var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inventory_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE products (id int NOT NULL,name varchar(255),quantity varchar(255), price float,PRIMARY KEY (ID))";
  con.query(sql, function (err, result)
    if (err) throw err;
    console.log("Table created");
  });