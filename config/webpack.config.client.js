const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(rootPath, 'src/client/main.js'),
    output: {
        path: path.resolve(rootPath, 'dist/client'),
        filename: 'app.js'
    },
    resolve: {
        alias: {
            components: path.resolve(rootPath, 'src/shared/components'),
            containers: path.resolve(rootPath, 'src/shared/containers')
        }
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