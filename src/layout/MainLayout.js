import React, { useContext } from 'react';

import { RiLightbulbFlashFill } from 'react-icons/ri';
import ThemeContext from '../contexts/ThemeContext';
import { Navbar } from '../components';
import '../styles/_main.sass';
import './mainlayout.sass';

const MainLayout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>

      <button className='an__theme-btn' onClick={toggleTheme}>
        <RiLightbulbFlashFill color={theme === 'light' ? '#28293e' : '#f8f8fa'} size={27} />
      </button>

      <div className='an__layout-container'>
        <Navbar />

        <div>
          {children}
        </div>
        
      </div>
    </div>
  );
};

export default MainLayout;
