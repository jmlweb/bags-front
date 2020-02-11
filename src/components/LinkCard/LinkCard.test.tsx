import React from 'react';
import { render } from '../../testUtils';

import LinkCard from './LinkCard';

test('LinkCard', () => {
  const { getByText } = render(<LinkCard to="/">This is a card</LinkCard>);
  expect(getByText('This is a card')).toBeInTheDocument();
});
