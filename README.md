# Hacker News Application

# Applo Server
公式ドキュメント
https://www.apollographql.com/docs/apollo-server/getting-started

GraphQL Serverを起動しアクセスすると、Playgroundでテストできる

~~~_
npm i apollo-server graphql
~~~

# Typescript
~~~bash
# 
npm init -y
# tsconfig.json を初期化
npx tsc --init

# 開発用ランナー(軽量　HMR安定　ESM対応済み)
npm i -D tsx

# typscript 型定義
npm i -D typescript @types/node

#コマンド	目的	動作内容
npm run dev	#開発用ホットリロード	tsxがファイル変更を即時反映（超高速）​
npm run typecheck	#型安全性の検証	js出力なしで型のみチェック (tsc --noEmit)
npm run build	#本番ビルド	TypeScript → JavaScriptへ出力 (distへ)
npm start	#本番実行	コンパイル済みJSをNodeで起動
~~~



# Codex
Codexは変更したら差分を出してくれないので、Commitしてから作業すること
~~~bash
# インストール
npm install -g @openai/codex

# 2. 初期化（プロジェクト設定）
codex init
# 作業再開
codex

# 3. 作業内容を指示
codex plan "Add a new domain entity for Customer with CRUD endpoints"
codex --task-file spec/customer.md


# 4. 実行
codex edit
codex --approval-mode suggest "Add a new payment microservice module."

# 以下のオプションが使える
--approval-mode suggest（デフォルト）：編集・コマンド実行前に確認あり
--approval-mode auto-edit：ファイル編集は自動、コマンド実行前に確認あり →★おすすめ
--approval-mode full-auto：編集・コマンド実行ともに自動（注意が必要）



# 5.テスト
codex run tests

# 6. 質問・回答（ファイルへの変更なし）
codex "What is the difference between domain and application layer in DDD?"
~~~
