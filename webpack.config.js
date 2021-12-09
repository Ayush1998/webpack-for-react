const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
      // Webpack configuration goes here
    mode: 'development',
    entry: {
        app : './src/index.js',
        vendor: ['semantic-ui-react'],
    },
    output: {
      filename: '[name].[hash].js',
      publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
    
          // First Rule
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
    
          // Second Rule
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                //   localsConvention: 'camelCase',
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: 'public/index.html',
        })
      ],
      devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
      },
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            },
            vendor: {
              chunks: 'initial',
              test: 'vendor',
              name: 'vendor',
              enforce: true
            }
          }
        }
      },
};