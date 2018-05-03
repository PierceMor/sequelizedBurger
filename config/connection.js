var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function (error ){
    if(error){
        console.error(`Error connecting ${error.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});


module.exports = connection;