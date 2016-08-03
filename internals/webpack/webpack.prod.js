// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// PostCSS plugins
const postcssReporter = require('postcss-reporter');

module.exports = require('./webpack.base')({

  // We use ExtractTextPlugin so we get a seperate CSS file instead
  // of the CSS being in the JS and injected as a style tag
  cssLoaders: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?modules&importLoaders=1!postcss-loader'
  ),

  // In production, we minify our CSS with cssnano
  postcssPlugins: [
    postcssReporter({
      clearMessages: true,
    }),
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),


    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin(),

    // Minify and optimize the JavaScript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false, // ...but do not show warnings in the console (there is a lot of them)
      },
    }),

    // Extract the CSS into a seperate file
    new ExtractTextPlugin('[name].css'),
  ],
});
