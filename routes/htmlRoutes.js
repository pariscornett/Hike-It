//require the express package and initialize it in the variable called "app"
var express = require("express");
//var app = express();
var router = express.Router();
//require the trails.js file through a direct pathway
//var trails = require("../public/assets/js/trails.js");

router.get("/", function(req,res) {
    // res.json({ msg: 'testing'});
    res.render("index");
});

module.exports = router;