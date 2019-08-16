// Requiring our models
var db = require("../models");
module.exports = function (app) {

    //require the express package and initialize it in the variable "app"
    // var express = require("express");
    // var app = express();

    //require the trails.js file through a direct pathway
    //var trails = require("../public/assets/js/trails.js");
    //route to display the "Retrieve All Trails in My City" page
    app.get("/trails/:city", function (req, res) {

        db.Trail.findAll({
            where: {
                trailCity: req.params.city
            }
        }).then(function (dbTrail) {
            res.status(200).json(dbTrail);
        }).catch(function (err) {
            console.log(err);
        });
        res.render("dashboard-search");
    });

    //route to display the "Add a new Trail" page


    app.post("/trails/add", function (req, res) {
        if (req.isAuthenticated()) {
            db.Trail.create({
                userName: req.user.userName,
                trailName: req.body.trailName,
                trailAddress: req.body.trailAddress,
                trailCity: req.body.trailCity,
                trailState: req.body.trailState,
                trailLength: req.body.trailLength,
                trailDifficulty: req.body.trailDifficulty
            }).then(function (dbTrail) {
                res.status(200).json({
                    trail: dbTrail,
                    success: true,
                    msg: "Trail successfully added."
                });
            }).catch(function (err) {
                console.log(err);
            });

            res.render("add-trail", user);
        } else {
            (function (dbTrail) {
                res.status(401).json({
                    msg: "You must be logged in to view this page."
                });
            });
            res.redirect("/");
        }

    });




    // app.post("/trails/add", function (req, res) {
    //     console.log(req.body);
    //     db.Trail.create({
    //         // userName: req.body.userName,
    //         trailName: req.body.trailName,
    //         trailAddress: req.body.trailAddress,
    //         trailCity: req.body.trailCity,
    //         trailState: req.body.trailState,
    //         trailLength: req.body.trailLength,
    //         trailDifficulty: req.body.trailDifficulty
    //     }).then(function (dbTrail) {
    //         res.status(200).json({
    //             trail: dbTrail,
    //             success: true,
    //             msg: "Trail successfully added."
    //         });
    //     }).catch(function (err) {
    //         console.log(err);
    //     });
    //     res.render("add-trail");
    // });

    //route to display the "Update Trail" page
    app.put("/trails/update", function (req, res) {
        db.Trail.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }
        ).then(function (dbTrail) {
            res.json(dbTrail);
        }).catch(function (err) {
            console.log(err);
        });
        res.render("update-trail");
    });

    //route to display the "Delete Trail" warning
    app.delete("/trails/delete", function (req, res) {
        if (req.isAuthenticated()) {
            if (req.user.accessLevel == "0") {
                db.Trail.destroy({
                    where: {
                        id: req.params.id
                    }
                }).then(function (dbTrail) {
                    res.json(dbTrail);
                }).catch(function (err) {
                    console.log(err);
                });
                res.render("delete-trail");
            } else {
                (function (dbTrail) {
                    res.status(401).json({
                        msg: "You must be an admin to delete this page."
                    });
                });
            }
        } else {
            (function (dbTrail) {
                res.status(401).json({
                    msg: "You must be logged in as admin to delete this page."
                });
            });
            res.redirect("/");
        }

    });
}