import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext';
import logo from '../../assets/logo.png'
import './footer.sass'

const FooterLinks = ({title, p1, p2, p3, p4}) => (
  <div className='linksdiv'>
    <h2>{title}</h2>
    <p>{p1}</p>
    <p>{p2}</p>
    <p>{p3}</p>
    <p>{p4}</p>
  </div>
)

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='an__footer'>
      <div className={`section__spacer${theme === 'light' ? ' light-waves-footer' : ' dark-waves-footer'}`}> </div>
      <div className='an__footer-container'>

        <div className='an__footer-container_logo'>
          <img src={logo} alt='logo'/>
          <h2>ArteNeurAl ©</h2>
        </div>

        <FooterLinks title='Acerca de' p1='Informacion' p2='Acerca de' p3='Conocenos'/>
        <FooterLinks title='Acerca de' p1='Informacion' p2='Acerca de' p3='Conocenos'/>
        <FooterLinks title='Acerca de' p1='Informacion' p2='Acerca de' p3='Conocenos'/>


      </div>
    </div>
  )
}

export default Footer