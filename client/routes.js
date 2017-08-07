import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router'; // eslint-disable-line

/* ---- General ---- */
import App from './app';

/* ---- Import Pages ---- */
import Home from './src/home/home.container';
import Pond from './src/pond/pond.container';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="welcome" />
    <Route path="welcome" component={Home} />
    <Route path="main" component={Pond} />
  </Route>
);
