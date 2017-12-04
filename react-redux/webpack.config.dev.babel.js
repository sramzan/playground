import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import cleanWebpackPlugin from 'clean-webpack-plugin';
import path from 'path';

let APP_DIR   = path.resolve(__dirname, 'src/client/app'),
    BUILD_DIR = path.resolve(__dirname, './dist');

export default {
  /**
   * Displays debug info
   */
//   debug: true,

  /**
   * Other options exist... check documenation
   */
//   devtool: 'inline-source-map', 

  /**
   * webpack will display a list of all bundled files when this is set to false
   */
//   noInfo: false, 

  /**
   * Array of entry points
   * Good place to inject middleware (i.e. hot reloading)
   * Order matters! Make sure the app's actual entry point is last
   */
  entry: [ 
    'eventsource-polyfill', // necessary for hot reloading with IE
    // 'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails. reload=true is what tells webpack to reload if there is an issue
    APP_DIR + '/index.jsx',
  ],

  /**
   * Webpack will bundle code in a browser understandable manner
   */
  target: 'web',

  /**
   * Details for our dev bundle
   * Note that this does NOT generate any physical files. The files generated will be virtual files
   */
  output: {
    path: BUILD_DIR, // Note: Physical files are only output by the production build task `npm run build`.
    // publicPath: '/', // Tells webpack that the app will ultimately run from the dist dir
    filename: 'bundle.js'
  },

  /**
   * Dev server details
   */
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 8080
  },

  plugins: [
    new cleanWebpackPlugin(['dist']),
    new webpack.NoEmitOnErrorsPlugin(), // Keeps errors from breaking our hot reloading epxerience (handles them gracefully)
    new htmlWebpackPlugin({
        template: 'src/client/index.html'
    })
  ],

  /**
   * Tell webpack what sort of files we want it to handle
   * Can handle MORE than JS
   */
  module: {
    loaders: [
        {
            test: /\.js$/, 
            include: APP_DIR,
            loaders: ['babel']
        },
        {
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader'
        },
        {
            test: /(\.css)$/, 
            loaders: ['style', 'css']
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file'
        },
        {
            test: /\.(woff|woff2)$/,
            loader: 'url?prefix=font/&limit=5000'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }
    ]
  }
};