import React from 'react';

import { CardGridLayout } from '../../layouts';
import { OrderCardCreate } from '../../components';

const UserList = () => {
  return (
    <CardGridLayout>
      <OrderCardCreate />
    </CardGridLayout>
  );
};

export default UserList;
