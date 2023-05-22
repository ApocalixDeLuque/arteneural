import React from "react";
import { About, Footer, Header, Tutorial, Examples } from './containers'
//import { Navbar } from './components'
import './styles/_main.sass'
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <div>
        <div>
          <Header/>
        </div>
        <About/>
        <Tutorial/>
        <Examples/>
        <Footer/>
      </div>
    </MainLayout>
  )
}

export default App