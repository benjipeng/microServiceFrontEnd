const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

// * Know it during built time via CI/CD pipline
const domain = process.env.PRODUCTION_DOMAIN;


const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    // * for caching issues
    putlicPath: '/container/latest/'
    // TODO file built during production use the template above
  },
  plugins: [
    new ModuleFederationPlugin({
      // ! name is not required for a host module
      name: "container",
      remotes: {
        // ! key: matches when importing
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};
  
  module.exports = merge(commonConfig, prodConfig);
  