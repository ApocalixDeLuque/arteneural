import React, { useState, useContext } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext';

import logo from '../../assets/logo.png'
import './navbar.sass'

const Menu = () => (
  <>
    <p><Link to='/'>Home</Link></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#tutorial'>Info</a></p>
    <p><a href='#examples'>Examples</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { theme} = useContext(ThemeContext);

  return (
    <div>
      <div className='an__navbar'>
        <div className='an__navbar-links'>

          <div className='an__navbar-links_logo'>
            <Link to='/blog'><img src={logo} alt='logo'/></Link>
            <Link to='/'><p>ArteNeurAl</p></Link>
          </div>
          <div className='an__navbar-links_container'>
            <Menu />
          </div>

        </div>
        <div className='an__navbar-sign'>
          <p><Link to='/login'>Login</Link></p>
          <button type='button'><Link to='/register'>Register</Link></button>
        </div>

        <div className='an__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color={theme === 'light' ? '#000' : '#fff'} size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenuLine color={theme === 'light' ? '#000' : '#fff'} size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='an__navbar-menu_container scale-up-center'>
              <div className='an__navbar-menu_container'>
                <Menu />
                <div className='an__navbar-menu_container-login'>
                  <p><Link to='/login'>Login</Link></p>
                  <button type='button'><Link to='/register'>Register</Link></button>
                </div>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default Navbar