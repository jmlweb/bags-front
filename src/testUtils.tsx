import React, { FC } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@xstyled/styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from './theme';
import { ApiProvider } from './api';

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Router>
      <ApiProvider url="http://myservice.com">{children}</ApiProvider>
    </Router>
  </ThemeProvider>
);

const customRender = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {},
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
