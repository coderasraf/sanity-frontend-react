import React from 'react'

import { Header, About, Footer, Testimonials, Work, Skills } from './container'
import { Navbar } from './components'
import './app.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App