import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Section from '../Components/Section'

const Landing = () => {
  return (
    <>
        <div className='background'>
            <Navbar />
            <Hero />
        </div>
        <Section />
    </>
  )
}

export default Landing
