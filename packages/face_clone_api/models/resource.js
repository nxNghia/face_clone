'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Resource.belongsTo(models.Content)
    }
  }
  Resource.init(
    {
      resourceId: DataTypes.STRING,
      detail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Resource',
    },
  )
  return Resource
}
