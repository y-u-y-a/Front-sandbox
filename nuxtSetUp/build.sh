#!/bin/sh

# =====================================
# カレントディレクトリはコマンドを実行する場所
# =====================================

# Delete files
rm \
./store/README.md \
./static/README.md \
./plugins/README.md \
./pages/README.md \
./middleware/README.md \
./layouts/README.md \
./components/README.md \
./assets/README.md

# Summarize to src
mkdir src
mv assets components layouts pages plugins static store middleware src/

# Create assets
SASS_DIR="src/assets/sass"

mkdir src/assets/images src/assets/sass
touch \
$SASS_DIR/app.scss \
$SASS_DIR/reset.scss \
$SASS_DIR/colors.scss \
$SASS_DIR/customs.scss

## Sass
cat ./nuxtSetUp/sass/app.scss > $SASS_DIR/app.scss
cat ./nuxtSetUp/sass/reset.scss > $SASS_DIR/reset.scss
cat ./nuxtSetUp/sass/colors.scss > $SASS_DIR/colors.scss

# Replace vue files
cp ./nuxtSetUp/templates/default.vue src/layouts/
cp ./nuxtSetUp/templates/Index.vue src/pages/

# Install bootstrap, sass, axios, dotenv
npm install \
    sass-loader \
    node-sass \
    bootstrap-vue \
    @nuxtjs/axios \
    @nuxtjs/dotenv


# Move files
## Docker
mv ./nuxtSetUp/docker/Dockerfile.prod ./
mv ./nuxtSetUp/docker/docker-compose.yaml ./
## .env
cp ./nuxtSetUp/.env.sample ./.env
