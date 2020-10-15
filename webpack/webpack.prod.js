const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common.js');



// ２つの設定ファイルを結合
module.exports = merge(commonConfig, {
  // 圧縮した状態でビルド
  mode: 'production',
  // console.logを削除
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
