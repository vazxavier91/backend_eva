var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "order"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    total_price DECIMAL(10, 2),
    created_at TIMESTAMP
		);
CREATE TABLE order_items (
    id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10, 2)
);
  con.query(sql, function (err, result)
    if (err) throw err;
    console.log("Tables created");
  });