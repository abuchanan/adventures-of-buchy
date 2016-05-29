'use strict';

var pathlib = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var render = require('./common/render');

var routeslib = require('./common/routes').default(false);

// TODO these are only loaded once, so `webpack watch` doesn't pick them up without a restart
var ALBUM_PATHS = routeslib.AllAlbums.map(album => 'album/' + album.id);
var PROSE_PATHS = routeslib.Posts.map(post => 'prose/' + post.id);

function RenderPlugin(options) {
  this.options = options;
}
RenderPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', (compilation, callback) => {

    const chunkFiles = {};
    compilation.chunks.forEach(chunk => {
      chunkFiles[chunk.name] = chunk.files;
    });

    const complete = [];
    const targets = this.options.targets;
    const scripts = [];
    const styles = [];

    const entries = ['manifest', 'styles', 'vendor', 'app'];

    for (let name of entries) {
      for(const file of chunkFiles[name]) {
        if (/\.css$/.test(file)) {
          styles.push(file);
        } else if (/\.js$/.test(file)) {
          scripts.push(file);
        }
      }
    }

    for (let target of targets) {
      if (typeof target === 'string') {
        target = { path: target };
      }

      const outputPath = target.outputPath || target.path + '/index.html';
      render(target.path, scripts, styles, output => {
        compilation.assets[outputPath] = {
          source: function() {
            return output;
          },
          size: function() {
            return output.length;
          },
        };
        complete.push(target.path);

        if (complete.length == targets.length) {
          callback();
        }
      });
    }
  });
};

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        // loader: "style-loader!css-loader",
      },
      {
        test: /\/common\/.*\.js$/,
        loader: 'babel',
      },
      {
        test: /\/pages.*\.js$/,
        loaders: ['bundle?lazy', 'babel'],
      },
    ]
  },
  entry: {
    app: './common/app.js',
    styles: './common/styles/site.css',
    vendor: ['react', 'react-router', 'react-dom'],
  },
  output: {
    path: pathlib.join(__dirname, "built"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "/[id].[chunkhash].js",
  },
  plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      }),
      new ExtractTextPlugin("style.[contenthash].css", {
          allChunks: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new RenderPlugin({
        targets: [
          { path: '/', outputPath: 'index.html' },
          'books',
          'code',
          'resume',
          'videos',
          'art',
          'photos',
          'prose',
        ].concat(ALBUM_PATHS).concat(PROSE_PATHS),
      }),
  ],
};
