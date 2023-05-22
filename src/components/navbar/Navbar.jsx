import React, { useContext } from 'react'
import { RiMenuLine} from 'react-icons/ri';
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
  const { theme} = useContext(ThemeContext);

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

      <div className='an__navbar-dropdown'>
        <button className="an__navbar-dropbtn"><RiMenuLine color={theme === 'light' ? '#000' : '#fff' } size={27}/></button>
        <div className="an__navbar-dropdown-content">
          <p><Link to='/'>Home</Link></p>
          <p><a href='#about'>About</a></p>
          <p><a href='#tutorial'>Info</a></p>
          <p><a href='#examples'>Examples</a></p>
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