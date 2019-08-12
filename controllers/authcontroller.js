var exports = module.exports = {};

exports.home = function (req, res) {
  
    res.render("index");
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