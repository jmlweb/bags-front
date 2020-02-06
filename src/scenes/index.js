import React, { Suspense, lazy } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

const Order = lazy(() => import('./Order'));
const User = lazy(() => import('./User'));

const Scenes = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path="/order" component={Order} />
      <Route path="/user" component={User} />
      <Route render={() => <Redirect to="/order" />} />
    </Switch>
  </Suspense>
);

export default Scenes;
