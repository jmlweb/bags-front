import React from 'react';

import { act, render, fireEvent } from '../../testUtils';
import OrderCard from './OrderCard';
jest.mock('../../api/apiService');

describe('OrderCard', () => {
  it('works', async () => {
    const { getByText, getByTestId, getByTitle } = render(
      <OrderCard
        userEmail="michael@jordan.com"
        userName="Michael Jordan"
        orderId="111"
        bagsCount={2}
      />,
    );
    expect(getByText('michael@jordan.com')).toBeInTheDocument();
    expect(getByText('Michael Jordan')).toBeInTheDocument();
    await act(async () => {
      fireEvent.change(getByTestId('bagsInput'), {
        target: {
          value: 3,
        },
      });
      fireEvent.click(getByText('Update'));
    });
    expect(getByTitle('3 bags')).toBeInTheDocument();
  });
});
