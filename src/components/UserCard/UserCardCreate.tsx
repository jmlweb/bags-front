import React, { FormEvent } from 'react';
import { Redirect } from 'react-router-dom';

import useUserField from './useUserField';
import UserCardView from './UserCardView';
import { useApi } from '../../api';

const UserCardCreate = () => {
  const { service, makeRequest, idle, data } = useApi();
  const nameField = useUserField('');
  const emailField = useUserField('', true);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    makeRequest(
      service.createUser({
        name: nameField.value,
        email: emailField.value,
      }),
    );
  };
  const saved = Boolean(data);
  if (saved) {
    return <Redirect to="/user" />;
  }
  return (
    <UserCardView
      nameField={nameField}
      emailField={emailField}
      handleSubmit={handleSubmit}
      loading={!idle}
      saved={saved}
      buttonDefaultText="Create"
    />
  );
};

export default UserCardCreate;
