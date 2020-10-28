# Sass

## 1. Download /assets to project

## 2. Read css in HTML
HTMLでは`app.css`のみを読み込む
```html:
<link rel="stylesheet" href="/MyBootstrap/css/app.css">
```


## compile sass to css
```
$ sass --watch [sassファイルのパス]:[cssファイルのパス] --no-cache
```
```:サンプル
$ sass --watch assets/sass/app.scss:assets/css/app.css --no-cache
```

## detail
```sh:
.
├── css
│   └── app.css
└── sass
    ├── app.scss # エントリポイント
    ├── components
    │   ├── c-button.scss # ボタン関係
    │   ├── c-card.scss # tableやli関係
    │   └── utils.scss # 便利ツール
    ├── foundation
    │   ├── base.scss # ベース
    │   ├── reset.scss # リセットcss
    │   └── vars.scss # 変数管理
    └── layout # flexなど
        ├── grid.scss
        ├── margin.scss
        ├── padding.scss
        └── size.scss
```
