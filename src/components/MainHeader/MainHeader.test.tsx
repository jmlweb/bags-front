import React from 'react';
import { render } from '../../testUtils';

import MainHeader from './MainHeader';

describe('MainHeader', () => {
  it('renders the expected items', () => {
    const { getByText } = render(<MainHeader />);
    expect(getByText('Bags service')).toBeInTheDocument();
  });
});
