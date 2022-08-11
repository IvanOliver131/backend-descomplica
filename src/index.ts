import "reflect-metadata";
import 'dotenv/config';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql'
import { StudentResolver } from "./resolvers/StudentResolver";
import { PostgresDataSource } from "./database/dataSource";

async function main() {
  await PostgresDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!")
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err)
    })

  const schema = await buildSchema({
    resolvers: [StudentResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen()
  console.log(`Server running on ${url} 🔥🚀`)
}

main();