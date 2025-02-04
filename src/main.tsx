import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Styled-Components
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import GlobalStyles from './themes/global-styles.tsx';
import theme from './themes/theme.tsx';

const root = document.getElementById('root');

root
  ? createRoot(root).render(
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </StrictMode>
    )
  : console.log('root not found');
