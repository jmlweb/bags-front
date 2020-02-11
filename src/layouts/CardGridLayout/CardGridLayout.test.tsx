import React from 'react';
import { render } from '@testing-library/react';

import CardGridLayout from './CardGridLayout';

test('CardGridLayout', () => {
  const { getByText } = render(
    <CardGridLayout>
      <div>This is a card</div>
    </CardGridLayout>,
  );
  expect(getByText('This is a card')).toBeInTheDocument();
});
