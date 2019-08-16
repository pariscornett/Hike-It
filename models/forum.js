module.exports = function (sequelize, DataTypes) {
    var Forum = sequelize.define("Forum", {
        personalName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Personal name must be provided."
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Email must be provided."
                }
            }
        },
        itemlName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must provide an item name."
                }
            }
        },
        itemDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must provide an item description.."
                }
            }
        },
        itemCity: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must provide the city."
                }
            }
        },
        itemState: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must provide the State."
                }
            }
        },
        itemPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [0, 100000],
                    msg: "You cannot sell an item for more than $100,000"
                },
                notEmpty: {
                    args: true,
                    msg: "Must provide a price"
                }
            }
        }
        //add methods later    
    });


    return Forum;
};