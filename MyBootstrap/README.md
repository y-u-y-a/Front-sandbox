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


# sassコンパイル

```
$ sass [sassファイルのパス]:[cssファイルのパス]
$ sass [sassファイルのパス]:[cssファイルのパス] --no-cache
$ sass --watch [sassファイルのパス]:[cssファイルのパス] --cache-location [.sass-cacheの生成場所]
```
```
$ sass sass/app.scss:css/custom.css --no-cache
$ sass sass/app.scss:css/custom.css --cache-location sass/.sass-cache
```

# 勉強メモ
## sassコマンドが使えないエラー
sassは、Rubyのバージョン2.5.1に存在している。
globalのバージョンを2.5.1に変更してあげる必要がある。
```
rbenv: sass: command not found
The `sass' command exists in these Ruby versions:
  2.5.1
```
## col-の要素にmarginは共存させない
→ col-内に要素を追加してmarginをかける

可変はrowで対応？横並び固定はflex？
row, col → 確実に幅のパーセントを指定できる
flex → 中央寄せなどの寄せが自由自在
