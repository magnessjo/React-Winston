// Variables

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
  var plugins = [
    new CopyWebpackPlugin([
      { from: 'uploads/**/*', to: '', context: 'source/assets/' },
      { from: 'images/**/*', to: '', context: 'source/assets/' },
      { from: 'source/assets/templates', to: '../templates' },
      { from: 'source/assets/craft/**/*', to: '', flatten: true },
    ]),
    new webpack.DefinePlugin({
      PRODUCTION:
        env.NODE_ENV == 'production'
          ? JSON.stringify(true)
          : JSON.stringify(false),
    }),
  ];

  if (env.NODE_ENV == 'production') {
    plugins.push(
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
      }),
    );
  }

  return {
    entry: {
      app: path.resolve(`source/scripts/app`),
    },

    output: {
      path: path.resolve('craft/web'),
      filename: '[name].js',
    },

    mode: env.NODE_ENV,

    stats: {
      assets: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      colors: true,
      errors: true,
      errorDetails: true,
      source: true,
      timings: true,
      warnings: true,
    },

    module: {
      rules: [
        {
          test: /\.ts|\.tsx$/,
          loader: ['ts-loader'],
          exclude: /node_modules/,
        },
      ],
    },

    plugins: plugins,

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: [path.resolve('source'), path.resolve('node_modules')],
    },
  };
};
