const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyjs = require('uglifyjs-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const LodashModuleReplacementPlugin  = require('lodash-webpack-plugin');
const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: __dirname + 'dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.less$/,
                exclude: /node_moduels/,
                loader: ['style-loader', 'css-loader?modules', 'less-loader', 'postcss-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_moduels/,
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'url-loader',
                exclude: /node_modules/,
                options: {
                    limit: 8192
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                exclude: /node_modules/,
                loader: 'file-loader',
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', '.less', '.css','ts','tsx']
    },
    devtool: '#eval-source-map',
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('uat')
        //     }
        // }),
    
    ],
    devServer: {
        contentBase: './',
        hot: true,
        historyApiFallback: true,
        host: "localhost",
        inline: true,
        open: true,
    }
}












