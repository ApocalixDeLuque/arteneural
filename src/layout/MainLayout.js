import React from 'react'
import { Navbar } from '../components'
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from 'react-icons/ri'
import '../styles/_main.sass'
import './mainlayout.sass'
import { useTheme } from '../contexts/ThemeContext.js';

const MainLayout = ({children}) => {
  const { theme, toggleTheme } = useTheme();
  return (
  <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
    <button className='an__btn' onClick={toggleTheme}> <RiLightbulbFlashFill color={theme === 'light' ? '#000' : '#fff'} size={27}/> </button>
    <div>
      <Navbar/>
      <div>
        {children}
      </div>
    </div>
  </div>
  )
}

export default MainLayout