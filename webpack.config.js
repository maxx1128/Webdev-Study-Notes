const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "../css/main.css"
});

const uglifyJs = new UglifyJsPlugin();

module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path: path.resolve(__dirname, "js/"),
    filename: "bundle.js"
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ],
    rules: [
      {
        test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'webpack/scss_files/main.scss')
        ],
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: true,
              importLoaders: 1
            }
          }, {
            loader: "postcss-loader"
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      }
    ],
  },
  plugins:[
    uglifyJs,
    extractSass
  ]
}
