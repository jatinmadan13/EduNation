import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/videoplayer/Videoplayer'


const App = () => {

  const [playState, setPlayState]= useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle='OUR PROGRAM' title='What We Offer' />
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subtitle='GALLERY' title='Campus Photos' />
      <Campus/>
      <Title subtitle='Testimonials' title='What Student Says' />
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer playState ={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App