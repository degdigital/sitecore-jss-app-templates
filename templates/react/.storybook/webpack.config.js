const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ({config}) => {
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

    return config;
};