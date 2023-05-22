import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full text-white border-b border-gray-500 p-4 flex items-center justify-around'>
      <div>
        <p className='text-4xl italic font-semibold'>Diaspora build</p>
      </div>
      {/* <div></div> */}
      <div className='flex gap-4 '> 
        <p className='hover:text-primary cursor-pointer'>Home</p>
        <p className='hover:text-primary cursor-pointer'>Company</p>
        <p className='hover:text-primary cursor-pointer'>Projects</p>
        <p className='hover:text-primary cursor-pointer'>News</p>
        <p className='hover:text-primary cursor-pointer'>Contact us</p>
      </div>
      <div className='flex gap-4'>
        <p className='hover:text-primary cursor-pointer'>Register</p>
        <p className='hover:text-primary cursor-pointer'>Login</p>
      </div>
    </div>
  )
}

export default Navbar
