var connection = require('../config/connection.js');


//=================================================================================
// probably location of error
//=================================================================================
// function printQuestionMarks(num) {
//     var arr = [];
//     for (var i = 0; i <num; i++){
//         arr.push("?");
//     }
//     return arr.toString();
// }


// // Helper function to convert object key/valuesue pairs to sql 
// function objToSql(ob){
//     var arr = [];

//     // loop through the keys and push the kezz/valuesue as a string into arr 
//     for (var key in ob){
//         var valuesue = ob[key];
//         //check to skip hidden properties
//         if (Object.hasOwnProperty.call(ob, key)){
//             //if string with space, add quotations 
//             if (typeof valuesue === "string" && valuesue.undexOf(" ") >=0){
//                 valuesue = "'" + valuesue + "'";
//             }
//             arr.push(key + "=" + valuesue);
//         }
//     }// for

//     // translate array of strrings to a singe comma seperate string 
//     return arr.toString();
// } // objtosql

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
            
        });
    }, //selectall

    post: function(table, cols, values, cb) {
        console.log("ORM being touched");
        var queryString = "INSERT INTO" +table + cols +  "VALUES " + values + ";";
    
        console.log(queryString);
    
        connection.query(queryString,  function(err, result) {
          if (err) {
            throw err;
            console.log(err);
          }
    
          cb(result);

          console.log("orm.POST", queryString, err);
        });
      }, //create

    put: function(table, objColvalues, condition, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ? ;"; 

        console.log (queryString);

        connection.query(queryString, [table, objColvalues, condition], function(err, result){
            if (err){ throw err;}
            cb(result);
        });
    }, // update  

    deleting: function(table, condition, cb) {
        var queryString = "DELETE FROM ?? WHERE ?;";


        connection.query(queryString, [table, condition], function(err, result){
            if (err){ throw err;}
            cb(result);
        });
    } //delete
}; // orm


module.exports = orm;

