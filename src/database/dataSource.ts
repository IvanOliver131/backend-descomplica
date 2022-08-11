import { DataSource } from "typeorm"
require("dotenv").config();
let PostgresDataSource: DataSource;

if (process.env.NODE_ENV == 'development') {
  PostgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT) || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: false,
    migrations: [process.env.TYPEORM_MIGRATIONS],
    entities: [process.env.TYPEORM_ENTITIES],
  })
} else if (process.env.NODE_ENV == 'test') {
  PostgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT) || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: false,
    migrations: [process.env.TYPEORM_MIGRATIONS],
    entities: [process.env.TYPEORM_ENTITIES],
  })
} else {
  PostgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.BD_HOST_PROD || '0.0.0.0',
    port: Number(process.env.BD_PORT_PROD) || 5432,
    username: process.env.BD_USERNAME_PROD,
    password: process.env.BD_PASSWORD_PROD,
    database: process.env.BD_DATABASE_PROD,
    extra: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    migrations: [process.env.BD_MIGRATIONS_PROD],
    entities: [process.env.BD_ENTITIES_PROD],
  })
}


export { PostgresDataSource };
