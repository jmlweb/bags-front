import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import MainHeader from './MainHeader';

describe('MainHeader', () => {
  it('renders the expected items', () => {
    const { getByText } = render(
      <BrowserRouter>
        <MainHeader />
      </BrowserRouter>,
    );
    expect(getByText('Bags service')).toBeInTheDocument();
  });
});
