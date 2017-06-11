const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
				test: /\.css$/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					'file-loader',
					'img-loader'
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;