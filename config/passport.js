var bcrypt = require("bcryptjs");

module.exports = function (passport, user){

    
    var User = user;
    var LocalStrategy = require("passport-local").Strategy;
    //Passport will maintain persistent login sessions. In order for persistent sessions to work, the authenticated user must be serialized to the session, and deserialized when subsequent requests are made.
    //serialize user
    passport.serializeUser(function(user,done){
        done(null,user.id);
    });

    //deserialize user
    passport.deserializeUser(function(id,done){
        User.findOne({where:{id:id}}).then(function(user){
            if(user){
                done(null,user.get());
            }
        })

    });

    //local sign up
    passport.use("local-signup",new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback:true
        //allow pass back the entire request to the callback

    }, function (req,email,password,done){
         var generateHash = function(password){

             return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
         };

     
         User.findOne({
             where: {
                 email: email
             }
         }).then(function(user){
              
               if ( user){
                   console.log("That email is already taken");
                   return done(null,false, {message : "That email is already taken"});
                
               } else {
                   
                   var userPassword = generateHash(password);
                   var data = {
                       email: email,
                       password: userPassword,
                       firstName: req.body.firstName,
                       lastName: req.body.lastName,
                       userName: req.body.userName
                       };
                   console.log("data",data);

                   User.create(data).then(function(newUser,created){
                       
                       if (!newUser){
                           return done (null,false,{message:"create user fails"});  
                        }
                       if (newUser) {
                           return done(null, newUser)
                       }   
                   })
                   .catch(function(err){
                       console.log("when create new user , err",err);
                       return done (null, false, {message : err});
                   });
               }
         });
    
    }));


    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
        // by default, local strategy uses username and password
        usernameField: 'userName',
        passwordField: 'password',
        passReqToCallback: true //  pass back the entire request to the callback
    }, function (req, userName, password, done) {
        var User = user;

        console.log("signin  user name",userName);
        console.log("password",password);
        var isValidPassword = function (userpass, password) {
            return bcrypt.compareSync(password, userpass);
        }

        var userinfo;
   
        User.findOne({
            where: {
                userName: userName
            }
        }).then(function (user) {            
            
            if (!user) {
                User.findOne({
                    where : {
                        email: userName
                    }
                }).then(function(user){

                    if(!user){
                        console.log("Email or user name does not exist");
                        return done(null, false, { message: 'Email or user name does not exist' });
                    }
                        
                    if (!isValidPassword(user.password, password)) {
                            return done(null, false, { message: 'Incorrect password.' });
                        }

                        userinfo = user.get();
                        console.log("login return userinfo",userinfo);            
                        return done(null, userinfo);
                    }
                    
                ).catch(function (err) {
                    console.log("Error:", err);
                    return done(null, false, { message: 'Something went wrong with your Signin' });
                });
                
            }else {
           
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                userinfo = user.get();
                console.log("login return userinfo",userinfo);            
                return done(null, userinfo);
            }    

           

        }).catch(function (err) {
            console.log("Something went wrong with your Signin. Error:", err);
            return done(null, false, { message: 'Something went wrong with your Signin' });
        });
    }));
}
