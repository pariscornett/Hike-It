// Requiring our models
var db = require("../models/trails.js");
module.exports = function (app) {

    //GET route
    //user searches by city to find trails near them
    //returns trail info for all trails in that city: name, address, length, difficulty
    app.get("/trails/:city", function (req, res) {
        db.Trail.findAll({
            where: {
                trail_city: req.params.city
            }
        }).then(function (dbTrail) {
            //use json in front end to specify which pieces of
            //information we want
            res.json(dbTrail);
            console.log('hit get route');
        });
        // .catch(error);{
        //     //what is good stuff to put here?
        // }
    });

    //POST route
    //user adds a trail
    app.post("/trails/add", function (req, res) {
        console.log(req.body);
        db.Trail.create({
            userName: req.body.userName,
            trailName: req.body.trailName,
            trailAddress: req.body.trailAddress,
            trailCity: req.body.trailCity,
            trailState: req.body.trailState,
            trailLength: req.body.trailLength,
            trailDifficulty: req.body.trailDifficulty
        }).then(function (dbTrail) {
            res.json(dbTrail);
        });//what stuff do I need for a catch here
    });

    //DELETE route
    //delete a trail
    app.delete("/trails/delete", function (req, res) {
        db.Trail.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTrail) {
            res.json(dbTrail);
        });//what stuff do I need for a catch here
    });

    //PUT route
    //update a trail
    app.put("/trails/update", function (req, res) {
        db.Trail.update(
    //will this update everything where id: req.body.id?
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbTrail) {
                res.json(dbTrail);
            });//catch blah blah blah 
    });
}