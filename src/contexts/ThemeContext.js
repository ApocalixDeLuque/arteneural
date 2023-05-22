import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  }

  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  return { theme, toggleTheme };
};
