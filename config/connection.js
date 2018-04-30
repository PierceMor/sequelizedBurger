var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
});

module.exports = connection;