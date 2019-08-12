var exports = module.exports = {};

exports.home = function (req, res) {  
    
    res.render("index");
}

exports.homeMsg = function (req, res) {
  
    // res.render("index",{message:req.flash("message")});
    // console.log("req",req);
    // console.log("home msg req flash error ",req.flash("error"));
    res.json({success:false,message: req.flash("error")});
}

exports.dashboard = function (req, res) {
    
    var userObj = req.user;    
    console.log("dashboard req",req);
  
    res.render("dashboard-search",userObj );
    // res.render("dashboard-search",{message:req.flash("message")});   
    
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');

    })
}