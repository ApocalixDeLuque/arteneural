import React from 'react'
import { Navbar } from '../components'
//TODO dark mode button
const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainLayout