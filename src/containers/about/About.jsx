import React, { useContext } from 'react'
import { Info } from '../../components'
import { BiBrain, BiCheckCircle, BiDollarCircle } from "react-icons/bi"
import ThemeContext from '../../contexts/ThemeContext';
import './about.sass'

let iconStyles = { width: '30%', height: '30%' }

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='an__about'>
      <div className={`section__spacer${theme === 'light' ? ' light-waves-top' : ' dark-waves-top'}`}> </div>
      <div className='an__about-title'>
        <h2>Realiza tus ideas</h2>
        <h2>en segundos</h2>
      </div>
      <div className='an__about-container'>

        <Info title='Creación' text='Generamos imágenes a gran escala, si tú lo piensas, nosotros lo convertimos en realidad.'>
          <BiBrain className='iconMODIFY' style={iconStyles}/>
        </Info>

        <div className='line'>
          <hr className="rounded"></hr>
        </div>

        <Info title='Eficiencia' text='Obten resultados inmediatos, editalos o guarda tu arte para visualizarlo más tarde '>
          <BiCheckCircle style={iconStyles}/>
        </Info>

        <div className='line'>
          <hr className="rounded"></hr>
        </div>

        <Info title='Ahorro' text='Crea de manera gratuita y acorde a tu uso te ofrecemos planes que mejor se adapten a tu uso.'>
          <BiDollarCircle style={iconStyles}/>
        </Info>

      </div>
      <div className={`section__spacer${theme === 'light' ? ' light-waves-bottom' : ' dark-waves-bottom'}`}> </div>
    </div>
  )
}

export default About