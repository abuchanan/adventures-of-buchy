'use strict';

require('babel-core/register');

const fs = require('fs-extra');
const pathLib = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Helmet = require('react-helmet');

const routeslib = require('./routes').default(false);
const routes = routeslib.routes;

const template = fs.readFileSync(pathLib.join(__dirname, '..', 'index_template.html')).toString('utf-8');

function render(location, scripts, styles, callback) {
  console.log("Rendering", location);

  const scriptOut = scripts.map(src => `<script type="text/javascript" src="/${src}"></script>\n`).join('');

  const stylesOut = styles.map(href => `<link rel="stylesheet" href="/${href}">`);

  ReactRouter.match({ routes, location }, (error, redirection, renderProps) => {
    const context = React.createElement(ReactRouter.RouterContext, renderProps);
    const content = ReactDOMServer.renderToString(context);
    const head = Helmet.rewind();

    const output = template
      // This <div> wrapper is black magic that makes React check the page correctly.
      // No idea why it works.
      // http://stackoverflow.com/questions/33521047/warning-react-attempted-to-reuse-markup-in-a-container-but-the-checksum-was-inv
      .replace('<%= page styles %>', stylesOut)
      .replace('<%= page content %>', '<div>' + content + '</div>')
      .replace('<%= page scripts %>', scriptOut)
      .replace('<%= page title %>', head.title.toString())
      .replace('<%= page meta %>', head.meta.toString());

    callback(output);
  });
}

module.exports = render;
