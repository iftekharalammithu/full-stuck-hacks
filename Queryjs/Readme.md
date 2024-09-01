## Install The Dependencies

```
npm i apollo-server-core @apollo/server graphql
```

=> type Query Is The Schema of Graphql <br>
=> resolvers is for all functions activity <br>
=> ApolloServerPluginLandingPageGraphQLPlayground is for graphql dashboard <br>
=> Mutation is for Data Create, Update , Delete <br>

# Api calls

```
query All_Data{
  Post_d {
    id,
    title,
    Comment_d {
      email
      name
    }
  }
}

query Post_d {

    Post_d {
      body
      id
    }
}

query comment {
  Comment_d {
    body
  }
}

query individual {
  individual(id: "15") {
    title
    Comment_d {
      email
    }
  }
}

## Mutation

mutation create_user($userId: ID!, $createUserId: ID, $title: String, $body: String) {
  create_user(userId: $userId, id: $createUserId, title: $title, body: $body) {
    userId,
    id,
    title,
    body
  }
}
<!-- Variables -->
{
  "userId": "450",
  "createUserId": "450",
  "title": "mithu",
  "body": "add new command"
}
```
