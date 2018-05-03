var express = require('express');
var bodyP = require('body-parser');



var PORT = process.env.PORT || 3000;
var app = express();


// server static content for the app from the "public" directory in the application directory 
app.use(express.static('public'));

// Sets up the Express app to handle dat parsing 
app.use(bodyP.urlencoded({ extended: false }));

// parsing application/json
app.use(bodyP.json());

// set handlebars 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ default: "main" }));
app.set("view engine", "handlebars");

// importing routes and giving server access to them 
var routes = require('./controllers/burgers_controller');

app.use(routes);

// having server listen 
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`);
});