import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';

test('Card', () => {
  const { getByText } = render(<Card>This is a card</Card>);
  expect(getByText('This is a card')).toBeInTheDocument();
});
