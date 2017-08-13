//UglifyJsPlugin：会不会压缩已经压缩过的文件(react)

var path = require('path'),
		webpack = require('webpack'),
		CopyWebpackPlugin = require('copy-webpack-plugin'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),
		CleanWebpackPlugin = require('clean-webpack-plugin'),
		Dashboard = require('webpack-dashboard'),
    DashboardPlugin = require('webpack-dashboard/plugin'),
    dashboard = new Dashboard(),
		ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': './webpackVersion/scripts/home.js',
		'react': ['react']
	},
	output: {
		path: './dist',
		filename: 'javascript/[name].js'
	},
	eslint: {
     configFile: '.eslintrc',
     emitWarnings: true
   },
	// 使用source-map，方便开发测试
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.(css|styl)/,
				loader: ExtractTextPlugin.extract('style', '!css!stylus')
			},
			/* eslint-disable
			{
				test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
				loader: 'url'
			}
			/* eslint-disable */
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			// js压缩: 已经压缩过的文件是否还会被压缩？
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			// 提取公共模块
			name: ['react'],
			minChunks: Infinity // 提取所有entry共同依赖的模块
		}),
		new CleanWebpackPlugin(['dist'], {
			// 清空dist目录
			dry: false, // do not delete anything, good for testing.
			verbose: true,
			root: __dirname// webpack.config file path.
		}),
		new webpack.ProvidePlugin({
			'notes.css': './static/style/common/notes.styl'
		}),
		new ExtractTextPlugin('css/[name].css'),
		new HtmlWebpackPlugin({
			path: path.resolve(__dirname, './dist'),
			className: 'wrapper',
			style: 'sky-blue-style',
			date: '2016/04/01',
			title: 'ZJDGX',
			filename: path.resolve(__dirname, './index.html'),
			template: __dirname + '/webpackVersion/template.ejs',
			inject: true
		}),
		new CopyWebpackPlugin([
			// 复制images目录
			//{from: './static/images', to: 'image'},
			{from: './static/javascript/lib/frame.js', to: 'javascript'},
			//{from: './static/notes', to: 'notes'},
			//{from: './static/style/notes.css', to: 'css/notes.css'}
		]),
		new DashboardPlugin(dashboard.setData)
	]
}
