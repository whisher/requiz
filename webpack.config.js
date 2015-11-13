'use strict';

/**
 * Module dependencies.
 */
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENTRY = path.join(__dirname, 'app/index.js');
const OUTPUT = path.join(__dirname, '/dist/');
const APP = path.join(__dirname, '/app/');
const TEMPLATE = 'app/index.html';

export default  {
devtool: 'eval-source-map',
  entry:   [
        'webpack-hot-middleware/client?reload=true',
        ENTRY
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: OUTPUT,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
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
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }]
  }
};
