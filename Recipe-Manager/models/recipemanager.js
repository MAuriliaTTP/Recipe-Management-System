'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeManager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeManager.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    ingredients: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'RecipeManager',
    tableName: 'recipeManager'
  });

  return RecipeManager;
};