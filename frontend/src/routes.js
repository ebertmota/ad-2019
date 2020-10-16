import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SecretDraw from './pages/SecretDraw';
import EditPerson from './pages/EditPerson';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/secret-friend-generator" component={SecretDraw} />
      <Route path="/edit-person/:id" component={EditPerson} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
