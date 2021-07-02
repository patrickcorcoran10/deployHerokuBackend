const { Model, DataTypes } = require("sequelize");
const sequelzie = require("../config/connection");

class Car extends Model {}

Car.init(
    {
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_Manufacturers: {
            type: DataTypes.INTEGER,
            references: {
                model: "manufacturers",
                key: "id",
                unique: false
            }
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "car"
    }
)