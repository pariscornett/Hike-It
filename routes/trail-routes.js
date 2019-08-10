//require the express package and initialize it in the variable "app"
var express = require("express");
var app = express();

//require the trails.js file through a direct pathway
//var trails = require("../public/assets/js/trails.js");


//route to display the index page at /signup OR root /
app.get("/signup" || "/", function(req,res) {
    res.render("index");
});





//export all functions with
module.exports = app;