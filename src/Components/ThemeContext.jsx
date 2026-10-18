import React, { createContext } from 'react';
import useLocalStorage from './useLocalStorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  /* OLD: forgot the theme on every refresh
  const [theme, setTheme] = useState('light');
  */

  /* NEW: same as useState, but saved in localStorage under the key 'theme' */
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};