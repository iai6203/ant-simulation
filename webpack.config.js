const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // TypeScript
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      // sass
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 자동 주입 해제
      inject: false,

      template: "./src/templates/main.ejs",
      templateParameters: {
        lang: "ko",
        title: "Ant Simulation - v1.0.0",
        links: [],
        scripts: [
          { type: "module", src: "./main.js" },
        ],
      },
    }),
  ],
  resolve: {
    // 생략 가능한 확장자로`.ts`, `.tsx` 추가
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};
