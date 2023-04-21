import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme ,ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: '#f1fbff',
      main: '#161d20',
      dark: '#687074',
      contrastText: '#cccccc',
    },
    secondary: {
      light: '#64d9ff',
      main: '#00a8e8',
      dark: '#0079b5',
      chart: 'rgba(100, 217, 255, 0.5)',
      contrastText: '#161d20',
    },
    error: {
      light: '#ff6168',
      main: '#d7263d',
      dark: '#9e0017',
      contrastText: '#ffffff',
    },
    warning: {
      light: '#ffff80',
      main: '#ffe74c',
      dark: '#c8b506',
      contrastText: '#000000',
    },
    info: {
      light: '#64d9ff',
      main: '#00a8e8',
      dark: '#0079b5',
      contrastText: '#000000',
    },
    success: {
      light: '#8effd0',
      main: '#56e39f',
      dark: '#00b070',
      contrastText: '#000000',
    },
    type: 'dark',
    background: {
      default: '#161D20',
      paper: '#161D20',
    },
    divider: '#1c1c1c',
    text: {
      primary: '#cccccc',
      disabled: '#6a6d7b',
      hint: '#6a6d7b',
      secondary: '#a4a29e',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
