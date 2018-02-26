const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const config = {
    devtool: 'eval-source-map',

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3333,
      disableHostCheck: true,
    },

    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          exclude: /node_modules/,
          test: /\.(graphql|gql)$/,
          loader: 'graphql-tag/loader',
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };

  if (env && env.GRAPHQL_MOCK) {
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(
      /graphql\/http-link\.js/,
      './schema-link.js'
    ));
  }

  return config;
};
