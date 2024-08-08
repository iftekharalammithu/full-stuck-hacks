import { Comment_data, post_data } from "../Data.js";

const resolvers = {
  Query: {
    hello: () => "Hello world",
    Post_d: () => post_data,
    Comment_d: () => Comment_data,
    individual: (parent, arg) =>
      post_data.find((user_d) => user_d.id == arg.id),
  },

  User: {
    Comment_d: (cmd) => Comment_data.filter((p_d) => p_d.id == cmd.id),
  },
  Mutation: {
    create_user: (parent, { userId, id, title, body }) => {
      post_data.push({ userId, id, title, body });
      return post_data.find((ur) => ur.id == id);
    },
  },
};

export default resolvers;
