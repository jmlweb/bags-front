import React, { useEffect } from 'react';

import { useApi } from '../../api';
import { CardGridLayout } from '../../layouts';
import { LinkCard, UserCard } from '../../components';
import { UserItem } from '../../typings';

const UserList = () => {
  const { service, makeRequest, loading, data, error } = useApi();

  useEffect(() => {
    makeRequest(service.getUsers());
  }, [makeRequest, service]);
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <CardGridLayout>
      {(data as UserItem[]).map(item => (
        <UserCard
          key={item._id}
          id={item._id}
          email={item.email}
          name={item.name}
        />
      ))}
      <LinkCard to="/user/create">
        <span role="img" aria-label="add emoji">
          ➕
        </span>{' '}
        Create user
      </LinkCard>
    </CardGridLayout>
  );
};

export default UserList;
