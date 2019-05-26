var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob');
const entryArray = glob.sync('./src/**/*.jsx');

const entryObject = entryArray.reduce((acc, item) => {
  const name = item.replace('.jsx', '').replace('./src/','');
  acc[name] = item;
  return acc;
}, {});

module.exports = {
  entry: entryObject,
  output: {
    path: path.resolve(__dirname,'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: [/\.js[x]?$/],
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      },
    ]
  },
  externals: ['react'],
  mode: 'production'
};