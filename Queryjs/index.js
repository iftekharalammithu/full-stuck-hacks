import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  gql,
} from "apollo-server-core";

import {} from "graphql";
import { Comment_data, post_data } from "./Data.js";

const typeDefs = gql`
  type Query {
    hello: String
    Post_d: [User]
  }

  type User {
    userId: ID
    id: ID
    title: String
    body: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world",
    Post_d: () => post_data,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
