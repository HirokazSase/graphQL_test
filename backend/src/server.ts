import { ApolloServer, gql } from "apollo-server";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import  fs  from "fs";

// パスの取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ダミーデータHackerNewsの投稿
let links: Array<{ id: string; url: string; description: string }> = [
  {
    id: "link-0",
    url: "www.hirokazu-sase.com",
    description: "Hirokazu Saseのポートフォリオサイト",
  },
  {
    id: "link-1",
    url: "www.google.com",
    description: "Google検索エンジン",
  },
];

// リゾルバ（フィールドに対して処理をすること）を定義
const resolvers = {
  Query: {
    info: () => "HackerNewsクローン",
    feed: () => links,
  },

  Mutation: {
    post: (parent: any, args: { url: string; description: string }) => {
      let idCount = links.length;
      
      const link ={
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);
      return link;
    },
  },
};  




// Apollo Serverのインスタンスを作成
const server = new ApolloServer({
  typeDefs: fs.readFileSync(join(__dirname, "schema.graphql"), "utf8"),
  resolvers: resolvers,
  csrfPrevention: true,
}); 


server.listen().then(({ url }) => { 
  console.log(`🚀  Server ready at ${url}`);
}); 