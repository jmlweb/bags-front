import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box } from '@xstyled/styled-components';

import UserCreate from './UserCreate';
import UserList from './UserList';

const User = () => (
  <Box px={4}>
    <Switch>
      <Route path="/user/create" component={UserCreate} />
      <Route component={UserList} />
    </Switch>
  </Box>
);

export default User;
