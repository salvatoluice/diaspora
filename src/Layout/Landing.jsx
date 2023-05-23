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
        <div className='bg-[#EFEFEF] w-full p-6 items-center flex flex-col text-center'>
            <p className="text-primary font-semibold">
                The best A Grade Commercial & Residential Services
            </p>
            <p className='text-2xl font-bold'>
                High Quality Construction Management For Residentilas and Companies
            </p>
            <div className='flex gap-4 text-black text-start mt-4'>
                <div className="flex flex-col p-6 w-64 h-96 box-shadow rounded-xl bg-white h-auto hover:text-white hover:bg-primary cursor-pointer">
                    <p className='font-semibold text-xl pb-4 border-b borde-gray-500'>Architecture <br />& building</p>
                    <p className='text-sm py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, molestiae velit perspiciatis saepe, voluptate quas eaque dolorum quasi totam cum est magni facere perferendis! Error repellat eum molestias unde quibusdam.</p>
                    <p>Read More</p>
                </div>
                <div className="flex flex-col p-6 w-64 h-96 box-shadow rounded-xl bg-white h-auto hover:text-white hover:bg-primary cursor-pointer">
                    <p className='font-semibold text-xl pb-4 border-b borde-gray-500'>Architecture <br />& building</p>
                    <p className='text-sm py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, molestiae velit perspiciatis saepe, voluptate quas eaque dolorum quasi totam cum est magni facere perferendis! Error repellat eum molestias unde quibusdam.</p>
                    <p>Read More</p>
                </div>
                <div className="flex flex-col p-6 w-64 h-96 box-shadow rounded-xl bg-white h-auto hover:text-white hover:bg-primary cursor-pointer">
                    <p className='font-semibold text-xl pb-4 border-b borde-gray-500'>Architecture <br />& building</p>
                    <p className='text-sm py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, molestiae velit perspiciatis saepe, voluptate quas eaque dolorum quasi totam cum est magni facere perferendis! Error repellat eum molestias unde quibusdam.</p>
                    <p>Read More</p>
                </div>
            </div>
            <div className='flex w-full py-8'>
                <div style={{width: '50%'}} className='flex flex-col mt-24 bg-primary p-6 h-96 text-start text-white -mx-'>
                    <p className='font-semibold text-xl'>World's Lewading Industry corporation</p>
                    <p className='font-bold text-2xl'>Best A Grade commercial and Residential Services.</p>
                    <p className="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ducimus nam repudiandae debitis et ipsum sapiente nemo modi quo officiis, delectus repellendus praesentium deserunt adipisci non quisquam dolor accusantium voluptatem!</p>
                    <div className='flex py-6 gap-4 justify-between'>
                        <div>
                            <p className='text-xl font-bold pb-2'>Powerful Product Strategy</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, labore, similique ipsam alias laboriosam perferendis incidunt, laborum illum culpa</p>
                        </div>
                        <div>
                            <p className='text-xl font-bold pb-2'>Powerful Product Strategy</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, labore, similique ipsam alias laboriosam perferendis incidunt, laborum illum culpa</p>
                        </div>
                    </div>
                </div>
                <div style={{width: '50%'}} className='bg-primary'>
                    <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing
