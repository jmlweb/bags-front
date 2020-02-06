import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box } from '@xstyled/styled-components';

import OrderCreate from './OrderCreate';
import OrderEdit from './OrderEdit';
import OrderList from './OrderList';

const Order = () => (
  <Box px={4}>
    <Switch>
      <Route path="/order/create" component={OrderCreate} />
      <Route path="/order/:id" component={OrderEdit} />
      <Route component={OrderList} />
    </Switch>
  </Box>
);

export default Order;
