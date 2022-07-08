const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[hash][ext]"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader","sass-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2)/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ]
}