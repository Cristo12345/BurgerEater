var mysql = require("mysql");

PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "Soccer!101",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID: " + connection.threadId);
    console.log("Listening on localhost:" + PORT)
});

module.exports = connection;