import { DataSource } from "typeorm"
require("dotenv").config();

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  migrations: ["src/database/migrations/*.ts"],
  entities: ["src/models/*.ts"],
})

