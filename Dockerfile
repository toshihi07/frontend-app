# Node.js公式の軽量イメージをベースに使用
FROM node:20-alpine

# 作業ディレクトリを作成
WORKDIR /app

# package.jsonとlockファイルをコピーして依存解決
COPY package*.json ./

# 依存関係をインストール（`--frozen-lockfile` はnpmには不要）
RUN npm install

# アプリのソースコードをすべてコピー
COPY . .

# Next.jsをビルド（SSR前提）
RUN npm run build

# 必要な環境変数
ENV NODE_ENV=production
ENV PORT=3000

# 外部からアクセス可能なポートを公開
EXPOSE 3000

# Next.jsアプリを起動（SSRモード）
CMD ["npm", "start"]
