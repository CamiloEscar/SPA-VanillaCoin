const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Asegúrate de incluir '@babel/preset-react' aquí
            },
          },
        },
        {   test: /\.(img|url|png|svg|jpg|jpeg|gif)$/,
            use: {
             loader: "file-loader",
             options:{}
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
    ]   
},
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebpackPluguin({
        patterns: [{ from: './src/styles/styles.css',
        to: '' }],
      })
  ]

}
