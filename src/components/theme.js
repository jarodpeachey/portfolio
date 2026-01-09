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
    paragraph: '#4a5568',
    heading: '#1a202c',
    primary: '#000000',
    secondary: '#548bdd',
    gray: {
      one: '#1a202c',
      two: '#2d3748',
      three: '#4a5568',
      four: '#718096',
      five: '#a0aec0',
      six: '#cbd5e0',
      seven: '#e2e8f0',
      eight: '#edf2f7',
      nine: '#f7fafc',
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
