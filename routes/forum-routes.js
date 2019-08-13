var db = require("../models");
module.exports = function (app) {


//require the express package and initialize it in the variable "app"
var express = require("express");
var app = express();

app.get("/forum/:city", function (req, res) {

    db.Forum.findAll({
        where: {
            itemCity: req.params.city
        }
    }).then(function (dbForum) {
        res.status(200).json(dbForum);
    }).catch(function (err) {
        console.log(err);
    });
    res.render("dashboard-search", dbForum);
});



}