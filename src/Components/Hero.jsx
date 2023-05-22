import React from 'react'

const Hero = () => {
  return (
    <>
        <div style={{width: '600px', marginLeft:'20%', zIndex: '9999'}} className='flex gap-2 flex-col text-white items-center pt-8'>
            <p className='text-6xl font-bold'>
                Monitor your projects from anywhere in the world
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quas cumque suscipit ab facere commodi tempora, distinctio corporis dolores ducimus, eaque eligendi asperiores eum dicta odio rerum corrupti beatae assumenda.</p>
            <div className='w-96 gap-4 flex'>
                <button className='primary'>Get Started</button>
                <button className='secondary'>Know More</button>
            </div>
        </div>
    </>
  )
}

export default Hero
