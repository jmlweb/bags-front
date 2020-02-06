import React, { FC, FormEvent } from 'react';

import { Props } from './typings';
import OrderCardView from './OrderCardView';
import { minBags, maxBags } from './minMaxBags';
import useBagsFields from './useBagsField';
import { useApi } from '../../api';

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
    <OrderCardView
      userEmail={userEmail}
      userName={userName}
      orderId={orderId}
      minBags={minBags}
      maxBags={maxBags}
      handleChange={handleChange}
      handleBlur={handleBlur}
      bagsValue={bagsValue}
      handleSubmit={handleSubmit}
      loading={!idle}
      saved={saved}
    />
  );
};

export default OrderCard;
