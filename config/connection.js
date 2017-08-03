var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	port: 3333,
	user: "root",
	password: "",
	database: "burger_db"
});

connection.connect(function() {
	if(err) throw err;
	console.log("Error connection: " + err.stack);
	return;
});

module.exports = connection;