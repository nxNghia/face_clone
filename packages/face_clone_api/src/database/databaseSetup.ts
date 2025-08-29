import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  process.env.DATABASE || 'face_clone_db',
  process.env.DATABASE_USER || 'root',
  process.env.DATABASE_PASSWORD || 'password',
  {
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'mysql',
  },
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...')
  })
  .catch((error) => {
    console.error('Database connection failed:', error)
  })
