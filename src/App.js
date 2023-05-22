import React from "react";
import { About, Footer, Header, Tutorial, Examples } from './containers'
import MainLayout from "./layout/MainLayout"
import './styles/_main.sass'

const App = () => {
  return (
    <MainLayout>
      <Header/>
      <About/>
      <Tutorial/>
      <Examples/>
      <Footer/>
    </MainLayout>
  )
}

export default App