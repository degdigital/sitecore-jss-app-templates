const path = require('path');
const env = require('@babel/preset-env');
const reactApp = require('babel-preset-react-app');
const webpack = require('webpack');
// Webpack build configuration to build the SSR bundle.
// Invoked by build:server.

module.exports = {
  name: 'server-config',
  mode: 'production',
  entry: path.resolve(__dirname, './server.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.bundle.js',
    libraryTarget: 'this',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [env, reactApp],
          },
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' },
      },
      {
        // anything not JS or HTML, we load as a URL
        // this makes static image imports work with SSR
        test: /\.(?!js|mjs|jsx|html|graphql$)[^.]+$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        // anything in node_modules that isn't js,
        // we load as null - e.g. imported css from a module,
        // that is not needed for SSR
        test: /\.(?!js|mjs|jsx|html|graphql$)[^.]+$/,
        include: /node_modules/,
        use: {
          loader: 'null-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@config': path.resolve(__dirname, '../src/config/'),
      '@routes': path.resolve(__dirname, '../src/routes/'),
      '@services': path.resolve(__dirname, '../src/services/'),
      '@utils': path.resolve(__dirname, '../src/utils/')
    }
  },
  plugins: [
    // prevents the following warning during build:
    // > WARNING in ./node_modules/encoding/lib/iconv-loader.js
    // > Critical dependency: the request of a dependency is an expression
    new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, () => { }),
  ],
};
