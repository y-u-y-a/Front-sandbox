# How to

## 1. Create Nuxt Project
```
$ npx create-nuxt-app [プロジェクト名]
```

## 2. Exec these commands
```
$ git clone https://github.com/y-u-y-a/nuxtSetUp.git

$ bash nuxtSetUp/build.sh

$ rm -rf nuxtSetUp
```

## 3. Edit nuxt.config.js
```javascript

export default {
    mode: 'universal',
    srcDir: 'src/', // 追加
    ・
    ・
    css: [
        './src/assets/sass/app.scss'
    ],
    modules: [
        ['bootstrap-vue/nuxt', {css: false}],
        '@nuxtjs/axios',
        '@nuxtjs/dotenv'
    ],
    // 環境変数の設定
    env: {
        PROJECT_NAME: process.env.PROJECT_NAME,
        API_URL: process.env.API_URL
    },
    // 参照：https://axios.nuxtjs.org/options(axiosに渡すパラメータを設定できる)
    axios: {
        proxy: true
    },
    // key名の先頭にvalue部分が追加される(例：'/api/v2/items')
    proxy: {
        '/api/': process.env.API_URL
    }
}
```

## 4. Create .env
```
PROJECT_NAME=サンプルアプリ
API_URL=https://qiita.com/
```
