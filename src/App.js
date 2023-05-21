import React from "react";
import { About, Footer, Header, Tutorial, Examples } from './containers'
import { Navbar } from './components'
import './app.sass'
const App = () => {
  return (
    <div className="app">
      <div>
        <Navbar/>
        <Header/>
      </div>
      <About/>
      <Tutorial/>
      <Examples/>
      <Footer/>
    </div>
  )
}

export default App