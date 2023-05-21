import React from 'react'
import './header.sass'

const Header = () => {
  return (
    <div className='an__header section__padding'>
      <div className='an__header-content'>
        <h1>ArteNeurAI</h1>
        <div className='an__header-content__moving-text'>
          <p>Tus ideas, nuestra IA, arte en segundos</p>
        </div>
      </div>
    </div>
  )
}

export default Header