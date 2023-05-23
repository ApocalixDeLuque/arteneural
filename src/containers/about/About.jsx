import React from 'react'
import { Info } from '../../components'
import { BiBrain, BiCheckCircle, BiDollarCircle } from "react-icons/bi"
import './about.sass'

let iconStyles = { width: '30%', height: '30%' }

const About = () => {
  return (
    <div className='an__about'>
      <h2>Crea tus ideas</h2>
      <div className='an__about-container'>

        <Info title='brain' text='random text for the brain image look at me morty im pickle riiick'>
          <BiBrain style={iconStyles}/>
        </Info>

        <div className='line'>
          <hr className="rounded"></hr>
        </div>
        <Info title='verified' text='random text for the verified image look at me morty im pickle riiick'>
          <BiCheckCircle style={iconStyles}/>
        </Info>

        <div className='line'>
          <hr className="rounded"></hr>
        </div>

        <Info title='money' text='random text for the money image look at me morty im pickle riiick'>
          <BiDollarCircle style={iconStyles}/>
        </Info>

      </div>
    </div>
  )
}

export default About