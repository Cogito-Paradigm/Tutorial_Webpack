const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//
module.exports = {
	mode: 'development',
	// entry: './src/index.js',
	entry: {
		index: './src/index.js',
		print: './src/print.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			// title: 'Output Management',
			title: 'Development',
		}),
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	output: {
		// filename: 'main/js',
		// filename: 'bundle.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};
