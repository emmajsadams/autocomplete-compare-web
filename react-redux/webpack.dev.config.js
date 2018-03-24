"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist")
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          fix: true,
          emitErrors: true,
          failOnHint: true,
          typeCheck: true,
        }
      },
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.(woff|png|jpg|gif|svg|ttf|eot|woff2)$/, loader: "url-loader" },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
};
