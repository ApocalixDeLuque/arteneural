import React from 'react'
import { TbRosetteNumber1, TbRosetteNumber2, TbRosetteNumber3, TbHelpHexagon} from "react-icons/tb";
import './tutorial.sass'


const Item = ({children, title, text}) => (
  <div className='tutorial__item'>
    {children}
    <div className='tutorial__item-text'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
)
let $size = 100

const Tutorial = () => {
  return (
    <div className='tutorial'>
      <div className='tutorial__container'>

        <div className='tutorial__container-title'>
          <h2>¿Como funciona?</h2>
        </div>

        <div className='tutorial__container-content'>

          <div className='tutorial__container-content-menu'>
            <Item title="Escribe tu idea" text="Da una descripción detallada sobre lo que desees generar. ¡Piensalo y estará listo!">
              <TbRosetteNumber1 size={$size}/>
            </Item>
            <Item title="Escribe tu idea" text="Da una descripción detallada sobre lo que desees generar. ¡Piensalo y estará listo!">
              <TbRosetteNumber2 size={$size}/>
            </Item>
            <Item title="Escribe tu idea" text="Da una descripción detallada sobre lo que desees generar. ¡Piensalo y estará listo!">
              <TbRosetteNumber3 size={$size}/>
            </Item>
          </div>
          <div className='tutorial__container-content-logo'>
            <TbHelpHexagon className='icon'  size={$size*3}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Tutorial