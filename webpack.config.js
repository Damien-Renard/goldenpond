const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    alias: {
      src: path.resolve(__dirname, '..', 'client/src'),
      assets: path.resolve(__dirname, '..', 'public/assets'),
    },
    extensions: ['.js', '.jsx', '.json', '*'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
            },
          },
        ],
      },
      {
        // SCSS + CSS
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        // Assets (img)
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/svg/[name].[ext]',
        },
      },
      {
        // Other type of images import
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new LiveReloadPlugin({ appendScriptTag: true }),
  ],
};
