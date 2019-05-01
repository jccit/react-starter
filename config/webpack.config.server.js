const path = require('path');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    target: 'node',
    entry: path.resolve(rootPath, 'src/server/main.js'),
    output: {
        path: path.resolve(rootPath, 'dist/server'),
        filename: 'server.js'
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
    }
}