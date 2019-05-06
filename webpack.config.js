var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
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
      }
    ]
  },
  externals: ['react'],
  mode: 'production'
};