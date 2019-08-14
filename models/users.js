module.exports = function(sequelize,DataTypes){
    var User = sequelize.define("User",{
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            // field:"user_name" ,
            unique: {
                args: true
                // ,
                // msg: "User name already in use"
            }       
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail: true
                        
            },
            unique: {
                args: true
                // ,
                // msg: "Email already in use"
            }
        },
        firstName : {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            field:"first_name"
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            field: "last_name"
        },
        accessLevel:{
            type: DataTypes.STRING,
            defaultValue : "1",
            validate: {
              isIn: [["0","1"]]
              
            },
            //0 - for Admin, 1 for normal user 
            field: "access_level"
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
            // ,            
            // validate: {
            //     is: ["^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^&\*])(?=.{8,})+$",'i']
            //     // ,  
            //     // msg: "password must be a minimum of 8 characters and with one upper case letter, one number and one special character."
            // }
        }
        
    //add methods later    
    });
     

    return User;
};