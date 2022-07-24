// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');


class User extends Model {}

// set up fields and rules for User model
User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }    
  },  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
);



module.exports = User;