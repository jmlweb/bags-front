import React from 'react';

import { CardGridLayout } from '../../layouts';
import { UserCardCreate } from '../../components';

const UserList = () => {
  return (
    <CardGridLayout>
      <UserCardCreate />
    </CardGridLayout>
  );
};

export default UserList;
