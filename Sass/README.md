# 使い方

## 1. 使用したいプロジェクト内にクローン
```
$ git clone https://github.com/y-u-y-a/MyBootstrap.git
```
## 2. cssファイルの読み込み
以下を追加
```:html
<link rel="stylesheet" href="/MyBootstrap/css/app.css">
```

## sassコンパイル
```
$ sass --watch [sassファイルのパス]:[cssファイルのパス] --no-cache
```
```
$ sass --watch sass/app.scss:css/app.css --no-cache
```
