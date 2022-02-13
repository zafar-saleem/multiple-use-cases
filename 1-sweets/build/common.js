const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function buildConfig({ APP_DIR, BUILD_DIR }) {
  return {
    entry: APP_DIR + '/index.ts',
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    optimization: {
      minimize: true,
      minimizer: []
    },
    performance: {},
    module: {
      rules :[
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use : ['babel-loader', 'eslint-loader', 'ts-loader']
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: APP_DIR + '/index.html',
        filename: './index.html'
      })
    ]
  };
};

module.exports = buildConfig;
