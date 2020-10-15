const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');


// ２つの設定ファイルを結合
module.exports = merge(commonConfig, {
  mode: 'development',
  // npm run devで監視状態にするか？
  watch: true,
  // chrome上でエラー場所確認可能
  devtool: 'cheap-module-eval-source-map',
  // サーバー起動 + 自動ビルド(ファイル出力なし)
  devServer: {
    open: true,
    port: 3000,
    contentBase: path.resolve(__dirname, 'public'),
  },
});
