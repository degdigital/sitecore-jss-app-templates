const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require('./src/temp/config');

const isDisconnected = /localhost/i.test(config.sitecoreApiHost);

const proxyConfig = isDisconnected ?
    [
        {
            context: ['/sitecore', '/data/media'],
            target: `http://localhost:${process.env.PROXY_PORT || 3042}/`
        }
    ] :
    [
        {
            context: ['/sitecore', '/-', '/layouts'],
            target: config.sitecoreApiHost
        }
    ];

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        port: process.env.PORT || 3000,
        proxy: proxyConfig
    }
});