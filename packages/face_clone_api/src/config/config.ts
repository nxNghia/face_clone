import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  development: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
  };
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  "development": {
    username: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "password",
    database: process.env.DATABASE || "face_clone_db",
    host: process.env.DATABASE_HOST || "localhost",
    dialect: "mysql",
  }
};

export default config;
