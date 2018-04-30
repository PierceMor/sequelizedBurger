var express = require('express');
var bodyP = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle dat parsing 
app.use(bodyP.urlencoded({ extended: false }));
app.use(bodyP.json());

connection.connect(function(err){
    if (err){
        console.log(`Error connection: + ${err.stack}`);
        return;
    }
    console.log(`Connected as ID: ${connection.threadId}`);
});