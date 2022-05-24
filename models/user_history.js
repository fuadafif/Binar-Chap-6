"use strict";
const Model = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_History.init(
    {
      play_date: DataTypes.STRING,
      result: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_History",
    }
  );
  return User_History;
};
