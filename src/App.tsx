import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from '@xstyled/styled-components';

import { MainHeader } from './components';
import { MainLayout } from './layouts';
import Scenes from './scenes';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: ${theme.fonts.primary};
    background: ${theme.colors.ground};
    -webkit-font-smoothing: subpixel-antialiased;
    font-size: 3;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <MainLayout headerContent={<MainHeader />} bodyContent={<Scenes />} />
        </Router>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default App;
