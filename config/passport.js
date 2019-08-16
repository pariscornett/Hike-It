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
               console.log("sign up user",user);
               if ( user){
                   console.log("email taken done");
                   return done(null,false, {message : "That email is already taken"});
                
               } else {
                   console.log("not found user");
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
                    //    console.log("err.errors.message",err.errors[0].ValidationErrorItem.message);
                       return done (null, false, {message : err});
                   });
               }
         });
    
    }));


    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
        // by default, local strategy uses username and password, override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true //  pass back the entire request to the callback
    }, function (req, email, password, done) {
        console.log(req);
    
        var User = user;

        console.log("signin  email",email);
        console.log("password",password);
        var isValidPassword = function (userpass, password) {
            return bcrypt.compareSync(password, userpass);
        }

        var userinfo;
   
        User.findOne({
            where: {
                email: email
            }
        }).then(function (user) {            
            
            if (!user) {
                User.findOne({
                    where : {
                        userName: email
                    }
                }).then(function(user){

                    if(!user){
                        console.log("neither exists");
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
            console.log("Error:", err);
            return done(null, false, { message: 'Something went wrong with your Signin' });
        });
    }));
}
