const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseConfig = require("./webpack.config.base");

module.exports = merge.smart(baseConfig, {
  devtool: "source-map",

  mode: "production",

  target: "electron-main",

  entry: "./app/main.dev",

  output: {
    path: path.join(__dirname, ".."),
    filename: "./electron/main/main.prod.js"
  },

  optimization: {
    minimizer: process.env.E2E_BUILD
      ? []
      : [
          new TerserPlugin({
            parallel: true,
            sourceMap: true,
            cache: true
          })
        ]
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled"
    }),
    new webpack.EnvironmentPlugin({
      DEBUG_PROD: false,
      START_MINIMIZED: false
    })
  ],

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  }
});
