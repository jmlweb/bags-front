import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';

const OrderEdit = ({
  match,
}: RouteChildrenProps<{
  id: string;
}>) => {
  return <div>Order Edit {match?.params.id}</div>;
};

export default OrderEdit;
