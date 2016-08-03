/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

// PostCSS plugins
const postcssReporter = require('postcss-reporter');

module.exports = require('./webpack.base')({

  // Load the CSS in a style tag in development
  cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',

  // Process the CSS with PostCSS
  postcssPlugins: [
    postcssReporter({ // Posts messages from plugins to the terminal
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
	  new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
	  new webpack.NoErrorsPlugin()
	]

});
