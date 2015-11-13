'use strict';

/**
 * Module dependencies.
 */
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';

const ENTRY = path.join(__dirname, 'app/index.js');
const OUTPUT = path.join(__dirname, '/dist/');
const APP = path.join(__dirname, '/app/');
const TEMPLATE = 'app/index.html';

export default {
  entry: [
    ENTRY
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: OUTPUT,
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      include: APP,
      loader: 'babel?optional=es7.decorators'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      include: APP,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};
