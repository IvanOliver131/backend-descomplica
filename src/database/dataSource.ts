import { DataSource } from "typeorm"
require("dotenv").config();

export const PostgresDataSource = () => {
  let connection;
  if (process.env.NODE_ENV == 'development') {
    connection = new DataSource({
      type: "postgres",
      host: process.env.TYPEORM_HOST,
      port: 5432,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      migrations: ["src/database/migrations/*.ts"],
      entities: ["src/models/*.ts"],
    })
  } else if (process.env.NODE_ENV == 'test') {
    connection = new DataSource({
      type: "postgres",
      host: process.env.TYPEORM_HOST,
      port: 5432,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      migrations: ["src/database/migrations/*.ts"],
      entities: ["src/models/*.ts"],
    })
  } else {
    connection = new DataSource({
      type: "postgres",
      host: process.env.BD_HOST_PROD,
      port: 5432,
      username: process.env.BD_USERNAME_PROD,
      password: process.env.BD_PASSWORD_PROD,
      database: process.env.BD_DATABASE_PROD,
      extra: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      migrations: ['build/src/database/migrations/*.js'],
      entities: ['build/src/models/*.js'],
    })
  }

  return connection;
};
