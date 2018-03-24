"use strict";

const webpack = require("webpack");
const config = require("./webpack.dev.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");

config.output.filename = "[hash].bundle.js";
config.plugins.push(new CleanWebpackPlugin(["dist"], { root: process.cwd() }));
config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: true,
}));

module.exports = config;
