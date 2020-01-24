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
            App: path.resolve(__dirname, '../src'),
            Components: path.resolve(__dirname, '../src/components/'),
            Config: path.resolve(__dirname, '../src/config/'),
            Routes: path.resolve(__dirname, '../src/routes/'),
            Services: path.resolve(__dirname, '../src/services/'),
            Utils: path.resolve(__dirname, '../src/utils/')
        }
    };

    return config;
};