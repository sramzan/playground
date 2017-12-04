var webpack           = require('webpack'),
    htmlWebpackPlugin = require('html-webpack-plugin');
    path              = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/dist'),
    APP_DIR   = path.resolve(__dirname, 'src/client/app');

export default {
  entry: APP_DIR + '/index.jsx',
  output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
  },
    
    /**
     * The loaders property takes an array of loaders, here we are just using babel-loader. 
     * Each loader property should specify what are the file extension it has to process via the test property. 
     * Here we have configured it to process both .js and .jsx files using the regular expression. The 
     * include property specifies what is the directory to be used to look for these file extensions. 
     * The loader property represents the name of the loader.
     */
    module : {
      loaders : [
        {
          test    : /\.jsx?/,
          include : APP_DIR,
          loader  : 'babel-loader'
        }
      ]
    },

    devServer: {
      contentBase: BUILD_DIR,
      compress: true,
      port: 8080
    },

    plugins: [new htmlWebpackPlugin({
      template: 'src/client/index.html'
    })]
};