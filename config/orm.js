var connection = require('./connection');


//=================================================================================
// probably location of error
//=================================================================================
function printQuestionMarks(num) {
    var arr = []
    for (var i = 0; i <num; i++){
        arr.push("?");
    }
    return arr.toString();
}


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

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
            
        });
    }, //selectall

    post: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += "); ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }, //create

    put: function(table, objColVals, condition, cb) {
        var queryString = `UPDATE ${table} SET ${objColVals} WHERE ${condition} ;`; 

        console.log (queryString);

        connection.query(queryString, function(err, result){
            if (err){ throw err;}
            cb(result);
        });
    }, // update  

    deleting: function(table, condition, cb) {
        var queryString = `DELETE FROM ${table} WHERE ${condition};`;


        connection.query(queryString, function(err, result){
            if (err){ throw err;}
            cb(result);
        });
    } //delete
}; // orm


module.exports = orm;

