import React, { FC, FormEvent } from 'react';
import styled from '@xstyled/styled-components';

import { UserFieldProps } from './useUserField';
import Card from '../Card';

export interface Props {
  nameField: UserFieldProps;
  emailField: UserFieldProps;
  handleSubmit: (e: FormEvent) => void;
  loading: boolean;
  saved: boolean;
  buttonDefaultText: string;
}

const SFieldWrapper = styled.div`
  margin-bottom: 3;
`;

const SFieldGroup = styled.label`
  display: block;
`;

const SFakeLabel = styled.span`
  display: block;
`;

const SInput = styled.input`
  font-size: 3;
  font-family: primary;
  width: 100%;
  padding: 2;
`;

const SButton = styled.button`
  background-color: primary;
  color: #fff;
  border: 0;
  font-size: 2;
  padding: 3 4;
  margin-top: 3;
`;

const UserCardView: FC<Props> = ({
  nameField,
  emailField,
  handleSubmit,
  loading,
  saved,
  buttonDefaultText,
}) => (
  <Card as="form" onSubmit={handleSubmit}>
    <SFieldWrapper>
      <SFieldGroup>
        <SFakeLabel>Name</SFakeLabel>
        <SInput
          name="name"
          value={nameField.value}
          onChange={nameField.handleChange}
          onBlur={nameField.handleBlur}
        />
      </SFieldGroup>
      {nameField.error.length > 0 && <div>{nameField.error}</div>}
    </SFieldWrapper>
    <SFieldWrapper>
      <SFieldGroup>
        <SFakeLabel>Email</SFakeLabel>
        <SInput
          name="email"
          type="email"
          value={emailField.value}
          onChange={emailField.handleChange}
          onBlur={emailField.handleBlur}
        />
      </SFieldGroup>
      {emailField.error.length > 0 && <div>{emailField.error}</div>}
    </SFieldWrapper>
    <SButton type="submit" disabled={loading}>
      {saved && (
        <span role="img" aria-label="user saved">
          ✅
        </span>
      )}
      {loading ? 'Loading...' : buttonDefaultText}
    </SButton>
  </Card>
);

export default UserCardView;
