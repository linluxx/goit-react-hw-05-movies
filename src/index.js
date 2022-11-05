import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
  color: {
    mainBg: '#f1d3bc',
    secondBg: '#262F34',
    text: '#ffffff',
    secondText: '#615049',
    accent: '#F34A4A',
  },
  font: {
    main: 'Raleway',
    marker: 'Permanent Marker',
  },
  transition: 'all 250ms linear',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
