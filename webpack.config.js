const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "ASMR Bliss",
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "slime.html",
      template: "./src/slime.html",
    }),
    new HtmlWebpackPlugin({
      filename: "rain.html",
      template: "./src/rain.html",
    }),
    new HtmlWebpackPlugin({
      filename: "aboutUs.html",
      template: "./src/aboutUs.html",
    }),
    new HtmlWebpackPlugin({
      filename: "mukbang.html",
      template: "./src/mukbang.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
            },
          },
        ],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/audio/'
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
};
