import React, { useEffect } from 'react';

import { useApi } from '../../api';
import { CardGridLayout } from '../../layouts';

const OrderList = () => {
  const { service, makeRequest, idle, data, error } = useApi();

  useEffect(() => {
    makeRequest(service.getOrders());
  }, [makeRequest, service]);

  if (!idle) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <CardGridLayout>
      <div>{JSON.stringify(data)}</div>
    </CardGridLayout>
  );
};

export default OrderList;
