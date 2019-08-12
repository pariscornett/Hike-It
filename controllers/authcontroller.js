var exports = module.exports = {};
var path = require("path");

exports.home = function (req, res) {
    // res.sendFile(path.join(__dirname, '../views/index.html'));
    res.render("index");
}
exports.dashboard = function (req, res) {
    
    // res.sendFile(path.join(__dirname, '../views/dashboard.html'));
    var userObj = req.user;
    // console.log("dashboard req",req);
    console.log("dashboard req.user",req.user);
    res.render("dashboard", userObj );
   
    
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');

    })
}