const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[hash][ext]"
  },
  module: {
    rules: [
      {
        test:/\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2)$/,
        type: "asset/resource"
      }
      
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})
    ,
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        }
      })
    ]
  }
}