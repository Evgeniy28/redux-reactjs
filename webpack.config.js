const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public/assets/'),
    publicPath: '/assets/'
  },

  devtool: 'cheap-inline-module-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'public'),
    publicPath: '/assets/',
    host: 'localhost',
    port: 8080
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, 'src'),
        enforce: "pre",
        loader: 'eslint'
      },
      {
        test: /\.js$/,
        include: resolve(__dirname, 'src'),
        use: [
          'react-hot',
          {
            loader: 'babel',
            options: {
              presets: ['es2015', 'stage-0', 'react'],
              plugins: ['transform-runtime']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: resolve(__dirname, 'src'),
        loader: "style!css!postcss"
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};
