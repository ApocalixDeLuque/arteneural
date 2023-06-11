import React from 'react'
import { example1, example2, example3, example4, example5, example6, example7, example8, example9, example10 } from './imports'
import './examples.sass'

const Examples = () => {
  return (
    <div className='examples'>
      <div className='examples__container'>
        <div className='examples__container-title'>
          <h2>Mira nuestros <span className='text-color'>ejemplos</span></h2>
        </div>
        <div className='examples__container-images'>
          <div className='examples__container-images__section'>
          <img src={example1} alt='example' />
          <img src={example2} alt='example' />
          </div>
          <div className='examples__container-images__section'>
          <img src={example5} alt='example' />
          <img src={example6} alt='example' />
          <img src={example7} alt='example' />
          <img src={example3} alt='example' />
          </div>
          <div className='examples__container-images__section'>
          <img src={example8} alt='example' />
          <img src={example9} alt='example' />
          <img src={example10} alt='example' />
          <img src={example4} alt='example' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples