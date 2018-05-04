var connection = require('./connection');


// Helper function to convert object key/value pairs to sql 
function objToSql(ob){
    var arr = [];

    // loop through the keys and push the kezz/value as a string into arr 
    for (var key in ob){
        var value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)){
            //if string with space, add quotations 
            if (typeof value === "string" && value.undexOf(" ") >=0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }// for

    // translate array of strrings to a singe comma seperate string 
    return arr.toString();
} // objtosql

let orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
        });

    }, //selectall

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    }, //create

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM ??";
        queryString += "WHERE ?";

        conneciton.query(queryString, [table, condition ], function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    } //updateOne
}; // orm

module.exports = orm;