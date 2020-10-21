# 環境構築

***本番のみDockerで構築する***

## 開発用(development)
```bash
# ライブラリインストール(/node_modules)
$ npm install
# 開発サーバーを起動(with hot reload at localhost:3000)
$ npm run dev
```

## 本番(Production)
`Docker内で実行`
```bash
$ npm install
    # webpackでCSS,JSをproduction向けにビルド(/.nuxt)
$ npm run build
    # 静的(static)ファイルホスティングに使用, 本番にデプロイして運用(/dist)
$ npm run generate
```
