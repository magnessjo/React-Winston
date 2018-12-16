// Variables

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
  var cssLoaderOptions = {};

  var plugins = [
    new CopyWebpackPlugin([
      { from: 'uploads/**/*', to: '', context: 'source/assets/' },
      { from: 'images/**/*', to: '', context: 'source/assets/' },
      { from: 'source/assets/templates', to: '../templates' },
      { from: 'source/assets/craft/**/*', to: '', flatten: true },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
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

    cssLoaderOptions.minimize = true;
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

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            enforce: true,
          },
        },
      },
    },

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
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: __dirname + '/postcss.config.js',
                },
              },
            },
          ],
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
