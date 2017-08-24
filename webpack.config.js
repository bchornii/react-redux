var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'index.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react', 'stage-0']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };