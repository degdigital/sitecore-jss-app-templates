const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './',
        aliases: {
          '@app': './src',
          '@components': './src/components',
          '@config': './src/config',
          '@routes': './src/routes',
          '@services': './src/services',
          '@utils': './src/utils'
        }
      }
    }
  ]
};