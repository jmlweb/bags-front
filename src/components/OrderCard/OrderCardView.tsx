import React, { FC } from 'react';
import styled from '@xstyled/styled-components';

import Card from '../Card';

import { ViewProps } from './typings';

const STitle = styled.h2`
  color: primaryTinted;
  margin: 0;
`;

const SSubtitle = styled.p`
  margin: 1 0 0;
`;

const SFooter = styled.footer`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 3;
`;

const SBags = styled.p`
  margin: 0;
  color: primary;
  font-size: 4;
  display: flex;
  align-items: center;
  & strong {
    font-family: secondary;
  }
`;

const SInput = styled.input`
  width: 40px;
  padding: 2px;
  font-family: primary;
  font-size: 3;
  margin-right: 2;
`;

const SButton = styled.button`
  background-color: primary;
  color: #fff;
  border: 0;
  font-size: 1;
  padding: 2 3;
`;

const OrderCard: FC<ViewProps> = ({
  userEmail,
  userName,
  bagsValue,
  minBags,
  maxBags,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
  saved,
}) => {
  return (
    <Card as="form" onSubmit={handleSubmit}>
      <STitle>{userName}</STitle>
      <SSubtitle>
        <a href={`mailto:${userEmail}`}>{userEmail}</a>
      </SSubtitle>
      <SFooter>
        <SBags title={`${bagsValue} bags`}>
          <SInput
            min={minBags}
            max={maxBags}
            type="number"
            value={bagsValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />{' '}
          <span role="img" aria-label="bags emoji">
            🧳
          </span>
          {saved && (
            <span role="img" aria-label="order saved">
              ✅
            </span>
          )}
        </SBags>
        <SButton type="submit">{loading ? 'Loading...' : 'Update'}</SButton>
      </SFooter>
    </Card>
  );
};

export default OrderCard;
