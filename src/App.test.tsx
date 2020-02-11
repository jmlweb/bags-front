import React from 'react';
import { act, render, waitForElement, fireEvent } from '@testing-library/react';

import App from './App';

jest.mock('./api/apiService');

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
  it('should change page', async () => {
    const { getByText, queryByText, getAllByLabelText } = render(<App />);
    await waitForElement(() => queryByText('Create Order'));
    await act(async () => {
      fireEvent.click(getByText('Users'));
    });
    expect(getByText('Create user')).toBeInTheDocument();
    expect(getAllByLabelText('Name')).toHaveLength(2);
  });
});
