// var express = require('express');
// var bodyP = require('body-parser');
// var path = require('path');

// var app = express();
// var PORT = process.env.PORT || 3000;


// // Sets up the Express app to handle dat parsing 
// app.use(bodyP.urlencoded({ extended: false }));

// // parsing application/json
// app.use(bodyP.json());

// // set handlebars 
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ default: "main" }));
// app.set("view engine", "handlebars");

// // setting up static server 
// app.use(express.static(path.join(__dirname, "/public")));

// // importing routes and giving server access to them 
// var routes = require('./controllers/burgers_controller');

// app.use(routes);

// // having server listen 
// app.listen(PORT, function(){
//     console.log(`App listening on PORT: ${PORT}`);
// });


var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use( "/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
