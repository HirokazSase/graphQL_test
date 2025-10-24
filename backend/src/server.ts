// const { ApolloServer } = require("apollo-server")
import { ApolloServer, gql } from "apollo-server";

// GraphQLスキーマを定義
const type_defs = gql`
  type Query {
    info: String!
  }
`;


// リゾルバ（フィールドに対して処理をすること）を定義
const resolvers = {
  Query: {
    info: () => "HackerNewsクローン",
  },
};  


const server = new ApolloServer({
  typeDefs: type_defs,
  resolvers: resolvers,
  csrfPrevention: true,
}); 


server.listen().then(({ url }) => { 
  console.log(`🚀  Server ready at ${url}`);
}); 