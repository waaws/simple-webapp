var path = require('path');
var webpack = require('webpack');


module.exports = {
	context: __dirname,
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname + '/public/dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', 
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.less$/,
				loaders:['style','css','less']
		}]
	},
	
	plugins: [new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('development')
		}
	})],

	devServer: {
		historyApiFallback: true
	}
}
