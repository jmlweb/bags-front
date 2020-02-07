import React, { FormEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

import OrderCardFooter from './OrderCardFooter';
import { minBags, maxBags } from './minMaxBags';
import useBagsFields from './useBagsField';
import { useApi } from '../../api';
import Card from '../Card';
import OrderCardUserSelector from './OrderCardUserSelector';

const OrderCard = () => {
  const { service, makeRequest, idle, data } = useApi();
  const [user, setUser] = useState('');
  const { bagsValue, handleChange, handleBlur } = useBagsFields({
    bagsCount: 1,
    maxBags,
    minBags,
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    makeRequest(
      service.createOrder({
        user,
        bagsCount: bagsValue,
      }),
    );
  };
  const saved = Boolean(data);

  if (saved) {
    return <Redirect to="/order" />;
  }
  return (
    <Card as="form" onSubmit={handleSubmit}>
      <OrderCardUserSelector value={user} setValue={setUser} />
      <OrderCardFooter
        bagsValue={bagsValue}
        minBags={minBags}
        maxBags={maxBags}
        handleChange={handleChange}
        handleBlur={handleBlur}
        saved={saved}
        loading={!idle}
        buttonDefaultText="Create"
      />
    </Card>
  );
};

export default OrderCard;
