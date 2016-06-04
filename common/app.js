import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import match from 'react-router/lib/match';
import browserHistory from 'react-router/lib/browserHistory';
import getRoutes from './routes';


const history = browserHistory;
const mountNode = document.getElementById('container');
const routes = getRoutes(true).routes;

history.listen(location => {
  if (window.ga !== undefined) {
    window.ga("set", "page", location.pathname);
    window.ga("send", "pageview");
  }
});

match({ history, routes }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(<Router {...renderProps} />, mountNode)
});
