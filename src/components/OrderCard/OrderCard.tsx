import React, { memo, FC, FormEvent } from 'react';
import styled from '@xstyled/styled-components';

import { Props } from './typings';
import OrderCardFooter from './OrderCardFooter';
import { minBags, maxBags } from './minMaxBags';
import useBagsFields from './useBagsField';
import { useApi } from '../../api';
import Card from '../Card';

const STitle = styled.h2`
  color: primaryTinted;
  margin: 0;
`;

const SSubtitle = styled.p`
  margin: 1 0 0;
`;

const OrderCard: FC<Props> = ({ userEmail, userName, orderId, bagsCount }) => {
  const { service, makeRequest, idle, data } = useApi();
  const { bagsValue, handleChange, handleBlur } = useBagsFields({
    bagsCount,
    maxBags,
    minBags,
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    makeRequest(
      service.updateOrder(orderId, {
        bagsCount: bagsValue,
      }),
    );
  };
  const saved = Boolean(data);
  return (
    <Card as="form" onSubmit={handleSubmit}>
      <STitle>{userName}</STitle>
      <SSubtitle>
        <a href={`mailto:${userEmail}`}>{userEmail}</a>
      </SSubtitle>
      <OrderCardFooter
        bagsValue={bagsValue}
        minBags={minBags}
        maxBags={maxBags}
        handleChange={handleChange}
        handleBlur={handleBlur}
        saved={saved}
        loading={!idle}
        buttonDefaultText="Update"
      />
    </Card>
  );
};

export default memo(OrderCard);
