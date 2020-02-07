import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should display the name of the page and a loading text', () => {
    const { getByText } = render(<App />);
    expect(getByText('Bags service')).toBeInTheDocument();
  });
  it('should arrive on the orders list, thus a create order button should appear', async () => {
    const { queryByText } = render(<App />);
    expect(await queryByText('Loading')).toBeInTheDocument();
    await waitForElement(() => queryByText('Create Order'));
  });
});
