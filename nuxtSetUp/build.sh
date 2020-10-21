#!/bin/sh

# =====================================
# カレントディレクトリはコマンドを実行する場所
# =====================================

# 不要ファイルを削除
rm \
./store/README.md \
./static/README.md \
./plugins/README.md \
./pages/README.md \
./middleware/README.md \
./layouts/README.md \
./components/README.md \
./assets/README.md

# srcディレクトリに集約
mkdir src
mv assets components layouts pages plugins static store middleware src/

# assets関係の作成
SASS_DIR="src/assets/sass"

mkdir src/assets/images src/assets/sass
touch \
$SASS_DIR/app.scss \
$SASS_DIR/reset.scss \
$SASS_DIR/colors.scss \
$SASS_DIR/customs.scss

# sassファイルの中身をコピー
cat ./nuxtSetUp/sass/app.scss > $SASS_DIR/app.scss
cat ./nuxtSetUp/sass/reset.scss > $SASS_DIR/reset.scss
cat ./nuxtSetUp/sass/colors.scss > $SASS_DIR/colors.scss

# vueファイルの書き換え
cp ./nuxtSetUp/templates/default.vue src/layouts/
cp ./nuxtSetUp/templates/Index.vue src/pages/

# bootstrap, sass, axios, dotenvをインストール =============
npm install \
    sass-loader \
    node-sass \
    bootstrap-vue \
    @nuxtjs/axios \
    @nuxtjs/dotenv


# Docker関係のファイルを移動
mv ./nuxtSetUp/docker/Dockerfile ./
mv ./nuxtSetUp/docker/docker-compose.yaml ./
