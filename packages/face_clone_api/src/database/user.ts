import { DataTypes } from 'sequelize'
import { sequelize } from './databaseSetup'

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
})
