
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
	mode: "development",
	entry: path.join(__dirname, "src/index.js"),
	output: {
		path: `${__dirname}/dist`,
		filename: "bundle.js",
		publicPath:'/'
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
				loader: ["style-loader", "css-loader?modules", "less-loader", "postcss-loader"]
			},
			{
				test: /\.css$/,
				exclude: /node_moduels/,
				loader: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				loader: "url-loader",
				exclude: /node_modules/,
				options: {
					limit: 8192
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				exclude: /node_modules/,
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
	devtool: "#eval-source-map",
	plugins: [
		new htmlWebpackPlugin({
			template: "./src/index.html"
		}),
	],
	devServer: {
		contentBase: "./",
		hot: true,
		historyApiFallback: true,
		host: "localhost",
		inline: true,
		open: true,
	}
};
