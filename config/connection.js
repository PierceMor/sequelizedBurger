var mysql = require('mysql');

var connection;
if ( process.env.JAWSDB_URL){
    connection = mysql.connection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
});
}

connection.connect(function (error ){
    if(error){
        console.error(`Error connecting ${error.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});


module.exports = connection;