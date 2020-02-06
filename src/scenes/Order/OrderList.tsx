import React, { useEffect } from 'react';

import { useApi } from '../../api';
import { CardGridLayout } from '../../layouts';
import { LinkCard, OrderCard } from '../../components';
import { OrderItem } from '../../typings';

const OrderList = () => {
  const { service, makeRequest, loading, data, error } = useApi();

  useEffect(() => {
    makeRequest(service.getOrders());
  }, [makeRequest, service]);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <CardGridLayout>
      {(data as OrderItem[]).map(item => (
        <OrderCard
          key={item._id}
          userName={item.user.name}
          userEmail={item.user.email}
          bagsCount={item.bagsCount}
          editLink={`/order/${item._id}`}
        />
      ))}
      <LinkCard to="/order/create">
        <span role="img" aria-label="add emoji">
          ➕
        </span>{' '}
        Create Order
      </LinkCard>
    </CardGridLayout>
  );
};

export default OrderList;
