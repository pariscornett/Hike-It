module.exports = function (sequelize, DataTypes) {
    var Trail = sequelize.define("Trail", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "user_name",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Username must be provided when adding a trail."
                }
            }
        },
        trailName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "trail_name",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must provide a trail name."
                }
            }
        },
        trailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "trail_address",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must provide the Street Address."
                }
            }
        },
        trailCity: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "trail_city",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must provide the City."
                }
            }
        },
        trailState: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "trail_state",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must provide the State."
                }
            }
        },
        trailLength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "trail_length",
            validate: {
                len: {
                    args: [0, 1000],
                    msg: "Your trail cannot be more than 1,000 miles"
                },
                notEmpty: {
                    args: true,
                    msg: "Must provide a trail length"
                }
            }
        },
        trailDifficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "trail_difficulty",
            validate: {
                len: {
                    args: [1, 10],
                    msg: "Trail difficulty must be between 1 and 10."
                },
                notEmpty: {
                    args: true,
                    msg: "Must provide a trail difficulty."
                }
            }
        }

        //add methods later    
    });


    return User;
};