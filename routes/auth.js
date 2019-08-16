var authController = require('./authcontroller.js');



module.exports = function (app, passport) {

    console.log("auth route");
    app.get('/', authController.home);

    app.get("/homeMsg",authController.homeMsg);
       
    app.get('/logout', authController.logout);

    app.get('/dashboard-search', isLoggedIn, authController.dashboard);

    app.get('/profile', isLoggedIn, authController.profile);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard-search',        
        failureRedirect: '/homeMsg',
        failureFlash: true        
    }
    ));

    // @route POST /login
    // @desc logs in a user
    app.post('/login', passport.authenticate('local-signin', {
  
        successRedirect: '/dashboard-search',        
        failureRedirect: '/homeMsg',
        failureFlash: true            }
    
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }
}
