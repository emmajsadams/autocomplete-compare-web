"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TapWebpackPlugin = require("tap-webpack-plugin");
const config = require("./webpack.dev.config");

// Change paths for test
config.target = "node";
config.entry = "./src/test-index";
config.output = {
  filename: "test-bundle.js",
  path: path.resolve("./tmp")
};

// stub file system
config.node = { fs: "empty" };

// remove html plugin
config.plugins.pop()

// Add tap plugin
config.plugins.push(new TapWebpackPlugin({ reporter: "tap-spec" }));

module.exports = config;
