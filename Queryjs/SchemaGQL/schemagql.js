import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  gql,
} from "apollo-server-core";

const typeDefs = gql`
  type Query {
    hello: String
    Post_d: [User]
    Comment_d: [comment]
    individual(id: ID!): User
  }

  type User {
    userId: ID!
    id: ID
    title: String
    body: String
    Comment_d: [comment]
  }

  type comment {
    postId: ID
    id: ID
    name: String
    email: String
    body: String
  }

  type Mutation {
    create_user(userId: ID!, id: ID, title: String, body: String): User
  }
`;

export default typeDefs;
