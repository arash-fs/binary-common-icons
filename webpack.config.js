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
      },
      {
        test: /\.svg$/,
        use : [
            'babel-loader',
            {
                loader : 'react-svg-loader',
                options: {
                    svgo: {
                        plugins: [
                            { removeTitle: false },
                        ],
                        floatPrecision: 2,
                    },
                },
            },
        ],
    },
    ]
  },
  externals: ['react'],
  mode: 'production'
};