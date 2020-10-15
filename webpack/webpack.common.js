const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');// html以外クリーンアップ

module.exports = {

  // ビルドするエントリポイントとなるファイルを指定
  entry: {
    app: './src/app.js',
    // another: './src/another.js'
  },

  // webpackによるビルドの出力先を指定
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js', // name: entryのファイル名
  },

  // plugins: [
  //   new CleanWebpackPlugin({
  //     cleanOnceBeforeBuildPatterns: ['**/*', 'index.html'],
  //   }),
  // ],
}
