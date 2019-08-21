import { GraphQLServer } from "graphql-yoga";
import resolvers from './graphql/reslovers';

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("GraphQL Server Running"));
