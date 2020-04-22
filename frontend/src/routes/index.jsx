import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import User from '../pages/results';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/person" exact component={User} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
