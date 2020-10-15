import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SecretDraw from './pages/SecretDraw';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/secret-friend-generator" component={SecretDraw} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
