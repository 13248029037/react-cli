const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const uglifyjs = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const LodashModuleReplacementPlugin  = require("lodash-webpack-plugin");
const path = require("path");
module.exports = {
	mode: "production",
	entry: {
		index: path.join(__dirname, "./src/index.js"),
	},
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "js/[name].[chunkhash].js",
		chunkFilename: "js/[name].[chunkhash].js",
		publicPath: "./"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: ["babel-loader","eslint-loader"]
			},
			{
				test: /\.less$/,
				exclude: /node_moduels/,
				use: [
					"style-loader",
					"css-loader?modules", "less-loader", "postcss-loader"
				]
			},
			{
				test: /\.css$/,
				exclude: /node_moduels/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader", "postcss-loader"
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				loader: "url-loader",
				options: {
					limit: 8192
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: "file-loader",
			}
		]
	},
	resolve: {
		alias: {
			"@": path.join(__dirname, "./src"),
		},
		extensions: [".js", ".jsx", ".less", ".css","ts","tsx"]
	},
	optimization: {

		splitChunks: {
			cacheGroups: { // 单独提取JS文件引入html
				common: {
					name: "common",
					chunks: "initial",
					minSize: 250000,
					maxSize: 300000,
					priority: 20
				}
			}
		}

	},
	devtool: "cheap-module-source-map",
	plugins: [
		new cleanWebpackPlugin(
			["dist/*"],　 //匹配删除的文件
			{
				root: path.resolve(__dirname, "./"),
				verbose: true,
				dry: false
			}),
		new uglifyjs({
			sourceMap: true
		}),

		new htmlWebpackPlugin({
			template: "./src/index.html"
		}),
		// new webpack.DefinePlugin({
		// 	"process.env": {
		// 		"NODE_ENV": JSON.stringify("production")
		// 	}
		// }),
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css",
		}),
		new optimizeCss(),
		new LodashModuleReplacementPlugin()
	]
};
