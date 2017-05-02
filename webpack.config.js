const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    './theme/elements.scss',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-2']
        }
      }
    },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader",
          options: {
            modules: true
          }
        },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: "sass-loader"
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:5000'
      }
    }
  }
};
