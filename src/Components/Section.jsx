import React from 'react'
import { AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const Section = () => {
  return (
    <div className='flex justify-center gap-8 p-6 items-center m-auto'>
      <div className="flex items-center">
        <div className="bg-primary text-white rounded-full p-2 mr-2">
            <AiOutlineMail />
        </div>
        <div className='flex flex-col'>
            <p className='font-semibold'>Quick Contacts</p>
            <p className='text-gray-500'>Email: info@diaspora.org</p>
            <p className='text-gray-500'>Phone: +254113794219</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-primary text-white rounded-full p-2 mr-2">
            <GoLocation />
        </div>
        <div className='flex flex-col'>
            <p className='font-semibold'>Our Location</p>
            <p className='text-gray-500'>QR Ngong Rd, Opp Prestige Plaza, </p>
            <p className='text-gray-500'>Nairobi Kenya</p>
        </div>
      </div>
      <div style={{width: '450px'}} className='-mt-32 text-white bg-primary p-6 h-48 z-index-999'>
        <p className='font-semibold text-2xl pb-2'>A leading platform for management of construction projects.</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem cum dicta quo error ea nostrum.</p>
        <p className='flex items-center gap-2 pt-4'>Learn more <AiOutlineArrowRight /></p>
      </div>
    </div>
  )
}

export default Section
