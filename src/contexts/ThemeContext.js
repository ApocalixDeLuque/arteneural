import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  }

  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
