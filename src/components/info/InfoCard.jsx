import React from 'react'
import './infocard.sass'

const Info = ({title, text, children}) => {
  return (
    <div className='an__info-container'>
      {children}
      <div className='an__info-container__title'>
        <h1>{title}</h1>
      </div>
      <div className='an__info-container__text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Info