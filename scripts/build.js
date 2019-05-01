const webpack = require('webpack');
const clientConfig = require('../config/webpack.config.client');
const serverConfig = require('../config/webpack.config.server');

webpack([
    clientConfig,
    serverConfig
], (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(stats.toString({
        stats: 'minimal',
        chunks: false,
        colors: true,
        modules: false,
        moduleTrace: true
    }))
});