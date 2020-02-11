import React from 'react';
import { render } from '@testing-library/react';

import MainLayout from './MainLayout';

test('MainLayout', () => {
  const { getByText } = render(
    <MainLayout headerContent="My heart" bodyContent="Will go on" />,
  );
  expect(getByText('My heart')).toBeInTheDocument();
  expect(getByText('Will go on')).toBeInTheDocument();
});
