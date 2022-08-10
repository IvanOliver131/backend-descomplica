import "reflect-metadata";

import path from 'path'
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql'
import { StudentResolver } from "./src/resolvers/StudentResolver";

async function main() {
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