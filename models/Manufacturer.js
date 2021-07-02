const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Manufacturer extends Model {}

Manufacturer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'manufacturer'
      }
);

module.exports = Manufacturer;