const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(rootPath, 'src/client/main.js'),
    output: {
        path: path.resolve(rootPath, 'dist/client'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },
    resolve: {
        alias: {
            components: path.resolve(rootPath, 'src/shared/components'),
            containers: path.resolve(rootPath, 'src/shared/containers')
        }
    },
    optimization: {
        namedModules: false,
        removeAvailableModules: true,
        splitChunks: {
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                }
            },
        },
        concatenateModules: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'static/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(rootPath, 'static'),
        compress: true,
        inline: true,
        hot: true,
        port: 9000,

        // support for tunneling
        host: '0.0.0.0',
        disableHostCheck: true
    }
}