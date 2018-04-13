const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/components/app.jsx'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader', 'eslint-loader']
          }
        ]
    }
}
