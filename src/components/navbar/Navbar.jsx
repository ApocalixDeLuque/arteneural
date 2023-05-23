import React, { useState, useContext, useEffect, useRef } from 'react'
import { RiMenuLine, RiCloseFill } from 'react-icons/ri';
import ThemeContext from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './navbar.sass'

const Menu = () => (
  <>
    <p><Link to='/'>Home</Link></p>
    <p><Link to='/#about'>About</Link></p>
    <p><Link to='/#info'>Info</Link></p>
    <p><Link to='/examples'>Examples</Link></p>
  </>
)

const Navbar = () => {

  const { theme } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }
  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };



  return (
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

      <div className='an__navbar-dropdown' onClick={handleDropdownClick}>

        <button className="an__navbar-dropbtn" onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <RiCloseFill color={theme === 'light' ? '#1c1c27' : '#f8f8fa'} size={27} />
          ) : (
            <RiMenuLine color={theme === 'light' ? '#1c1c27' : '#f8f8fa'} size={27} />
          )}
        </button>

        <div ref={dropdownRef} className={`an__navbar-dropdown-content${isDropdownOpen ? ' open' : ''}`}>
          <Menu/>
          <div className='an__navbar-dropdown-login'>
            <hr className="rounded"></hr>
            <p><Link to='/login'>Login</Link></p>
            <button type='button'><Link to='/register'>Register</Link></button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Navbar