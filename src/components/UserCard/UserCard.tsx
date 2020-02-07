import React, { FormEvent, FC } from 'react';

import useUserField from './useUserField';
import UserCardView from './UserCardView';
import { useApi } from '../../api';

export interface Props {
  id: string;
  name: string;
  email: string;
}

const UserCard: FC<Props> = ({ id, name, email }) => {
  const { service, makeRequest, idle, data } = useApi();
  const nameField = useUserField(name);
  const emailField = useUserField(email, true);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    makeRequest(
      service.updateUser(id, {
        name: nameField.value,
        email: emailField.value,
      }),
    );
  };
  const saved = Boolean(data);
  return (
    <UserCardView
      nameField={nameField}
      emailField={emailField}
      handleSubmit={handleSubmit}
      loading={!idle}
      saved={saved}
      buttonDefaultText="Update"
    />
  );
};

export default UserCard;
