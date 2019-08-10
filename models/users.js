module.exports = function(sequelize,DataTypes){
    var User = sequelize.define("User",{
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            field:"user_id"        
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail: true,
                msg:  "Must input a valid email"                
            }
        },
        firstName : {
            type: DataTypes.STRING,
            allowNull: false,
            field:"first_name"
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
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
            allowNull:false,
            validate: {
                len: [6,16],
                msg: "password's length must be between 6 to 16."
            }
        },
        activeStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            field: "active_status"
        }
        
    //add methods later    
    });
     

    return User;
};