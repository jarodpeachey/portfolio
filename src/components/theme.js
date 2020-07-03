/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  shadow: {
    one: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
    two: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.18)',
    three: '0 4px 12px rgba(50,50,93,.25), 0 1px 3px rgba(0,0,0,.18)',
    four: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
  },
  radius: {
    one: '3px',
    two: '6px',
    three: '16px',
    four: '999px',
  },
  spacing: {
    one: 4,
    two: 8,
    three: 14,
    four: 22,
    five: 32,
    six: 44,
    seven: 60,
  },
  heading: {
    one: 53,
    two: 36,
    three: 27,
    four: 18,
    five: 16,
    six: 14,
  },
  fontSize: {
    h1: 48,
    h2: 36,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 16,
    p: 17,
    small: 14,
  },
  color: {
    success: '#54dd7e',
    error: '#dd5454',
    paragraph: '#4c5267',
    heading: '#f6f9fc',
    // primary: '#e14eca',
    primary: '#e67043',
    secondary: '#548bdd',
    // secondary: '#e67043',
    gray: {
      // one: '#d1d1d5',
      // two: '',
      // darker: '#161627',
      // dark: '#363648',
      // light: '#d1d1d5',
      one: '#ffffff',
      two: '#ecf0f3',
      three: '#dde0e6',
      four: '#b3b8c3',
      five: '#8c93a2',
      six: '#676f80',
      seven: '#3e475a',
      // 'eight': '#2c3446',
      eight: '#1c2a3e',
      nine: '#14192b',
      // 'nine': '#15202b',
    },
  },
};

export const ThemeContext = React.createContext();

export const CustomThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
