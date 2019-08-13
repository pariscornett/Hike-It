var db = require("../models");
module.exports = function (app) {


//require the express package and initialize it in the variable "app"
var express = require("express");
var app = express();

//route to show all items for sale in the city
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
    res.render("forum-search", dbForum);
});



//route to display the "Add a new item to the forum" page
app.post("/forum/add", function (req, res) {
    console.log(req.body);
    db.Trail.create({
        // userName: req.body.userName,
        personalName: req.body.personalName,
        email: req.body.email,
        itemlName: req.body.itemlName,
        itemDescription: req.body.itemDescription,
        itemCity: req.body.itemCity,
        itemState: req.body.itemState,
        itemPrice: req.body.itemPrice
    }).then(function (dbTrail) {
        res.status(200).json({
            item: dbForum,
            success: true,
            msg: "Item successfully added."
        });
    }).catch(function (err) {
        console.log(err);
    });
    res.render("forum-add");
});



//route to display the "Update Forum" page
app.put("/forum/update", function (req, res) {
    db.Forum.update(
        req.body, {
            where: {
                id: req.body.id
            }
        }
    ).then(function (dbForum) {
        res.json(dbForum);
    }).catch(function (err) {
        console.log(err);
    });
    res.render("forum-update");
});


//route to display the "Delete Item from forum" warning
app.delete("/forum/delete", function (req, res) {
    db.Forum.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbForum) {
        res.json(dbForum);
    }).catch(function (err) {
        console.log(err);
    });
    res.render("forum-delete");
});





}