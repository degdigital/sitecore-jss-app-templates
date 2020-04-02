const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ({ config }) => {
    config.plugins.push(new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false
    }));

    const cssRules = config.module.rules.filter(rule => '.css'.match(rule.test) === null);

    config.module.rules = [
        ...cssRules,
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                    }
                },
                'css-loader',
                'postcss-loader'
            ]
        }
    ];
    config.resolve = {
        alias: {
            '@app': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components/'),
            '@config': path.resolve(__dirname, '../src/config/'),
            '@routes': path.resolve(__dirname, '../src/routes/'),
            '@services': path.resolve(__dirname, '../src/services/'),
            '@utils': path.resolve(__dirname, '../src/utils/')
        }
    };

    return config;
};