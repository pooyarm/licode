const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/Erizo.js',
  output: {
    filename: 'erizo.js',
    path: path.resolve(__dirname, 'dist'),
    libraryExport: 'default',
    library: 'Erizo',
    libraryTarget: 'var',
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        browsers: [
                                            "last 5 versions",
                                            "ie >= 11"
                                        ]
                                    },
                                    useBuiltIns: "entry"
                                }
                            ]
                        ]  //Preset used for env setup
                  }
              }
          }
      ]
  },
  devtool: 'source-map', // Default development sourcemap
};
