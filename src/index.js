import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, Global, css } from '@emotion/react';
import normalize from 'normalize.css';
import theme from 'constants/theme';
import globalStyles from 'constants/globalStyles';
import { App } from 'components/App';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Global
        styles={css`
          ${globalStyles}
          ${normalize}
        `}
      />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
