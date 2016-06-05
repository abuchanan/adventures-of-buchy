const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');

const port = process.env.PORT || 8080;
const app = express();

// serve static assets normally
// app.use(express.static(path.join(__dirname, '..', 'built')));
app.use(express.static(path.join(__dirname, '..', 'assets')));

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: "/",
  stats: { colors: true },
  noInfo: true,
}));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, '..', '', 'err.html'));
});

app.listen(port);
console.log("server started on port " + port);
