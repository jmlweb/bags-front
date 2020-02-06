import React from 'react';
import { Switch, Route } from 'react-router-dom';

import OrderList from './OrderList';

const Order = () => (
  <Switch>
    <Route component={OrderList} />
  </Switch>
);

export default Order;
