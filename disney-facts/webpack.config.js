// Modules
var webpack = require('webpack'),
    path    = require('path');

// Important Directories
var BUILD_DIR = path.resolve(__dirname, 'src/client/public'),
    APP_DIR   = path.resolve(__dirname, 'src/client/app');

// Configs
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
