const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@store': path.resolve(__dirname, './src/store'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@api': path.resolve(__dirname, './src/api'),
      '@imgs': path.resolve(__dirname, './src/imgs'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: './imgs',
            name: '[name].[ext]?[hash]',
          },
        },
      },
      {
        test: /\.(otf|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: {
          outputPath: './fonts',
          name: '[hash].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
      scriptLoading: 'defer',
      hash: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    publicPath: '/',
    host: 'localhost',
    hot: true,
    overlay: true,
    compress: true,
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true,
    // writeToDisk: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
