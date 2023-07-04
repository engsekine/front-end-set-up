# フロントエンドセットアップ

## 環境構築

### 1. git clone

`$ git clone git@github.com:engsekine/front-end-set-up`

### 2. .env ファイルコピー

`$ cp .env.sample .env.local`

### 3. npm ビルド

`$ npm install && npm run build`

### 4. デベロッパーモード起動

`$ npm run dev`

### 5. ローカルホスト起動

http://localhost:3000/

## コマンド

ビルド
`$ npm run build`
デベロッパーモード起動
`$ npm run dev`
本番環境起動
`$ npm run start`
lint 起動
`$ npm run lint`


## docker
ビルド
`$ docker-compose build --no-cache`
デベロッパーモード起動
`$ docker-compose up -d`
http://localhost:3000/

## ルール

### ブランチの切り方

機能追加
`{名字}/feature/{issue番号}_{読みやすいタイトル}`
`sekine/feature/01_add`
リファクタリング
`{名字}/refactor/{issue番号}_{読みやすいタイトル}`
`sekine/refactor/01_add`

### PR のテンプレート：

```
## PR の目的
（基本 issue 番号書けば良い）

## 対応方法
- 箇条書きで
- シンプルにまとめましょう
- 大きなPR場合はテンプレート沿わなくて良い
```
