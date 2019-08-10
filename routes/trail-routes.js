//require the express package and initialize it in the variable "app"
var express = require("express");
var app = express();

//require the trails.js file through a direct pathway
//var trails = require("../public/assets/js/trails.js");


//route to display the index page at /signup OR root / OR after logging out
app.get("/signup" || "/" || "/logout", function(req,res) {
    res.render("index");
});

//route to lead to dashboard after successful login
app.get("/login", function(req,res) {
    res.render("dashboard-info");
});

//route to display the "Retrieve All Trails in My City" page
app.get("/trails/:city", function(req,res) {
    res.render("dashboard-search");
});

//route to display the "Add a new Trail" page
app.get("/trails/add", function(req,res) {
    res.render("add-trail");
});

//route to display the "Update Trail" page
app.get("/trails/update", function(req,res) {
    res.render("update-trail");
});

//route to display the "Delete Trail" warning
app.get("/trails/delete", function(req,res) {
    res.render("delete-trail");
});




//export all functions with
module.exports = app;