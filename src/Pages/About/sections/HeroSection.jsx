import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
//import heroImg from '../../../Assets/Images/about/hero.png'
import heroImg from '../../../Assets/Images/about/8.png'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const HeroSection = () => {
    const { setIsFormOpen } = useContext(ContextAPI)
    return (
        <div className='w-full bg-secondaryDark text-headingDark pb-20  px-4  sm:px-20 xl:px-28 3xl:px-80  pt-40 flex flex-col justify-center items-center relative sm:min-h-screen'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer />
            <h1 data-aos="flip-up" className=' font-kaushans   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                Anime-Loving Artists <br /> Lore-Fueled Creators.

            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center mt-6'>
                We’re a team of passionate artists who turn VTuber dreams into detailed, animated, and expressive designs from full models to stream overlays. Every project we touch is handcrafted with love, storytelling, and anime energy.
            </p>

            <button onClick={() => setIsFormOpen(true)} className=' my-6 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Meet The Artist</button>

            <div className='w-full flex justify-center items-center '>
                <img src="https://res.cloudinary.com/dqflexfdy/image/upload/v1759427863/CHRACHTER_AB-01_dnrhtw.png" alt="" className="w-[180px] sm:w-[250px]" />
                <img src="https://res.cloudinary.com/dqflexfdy/image/upload/v1759427864/CHRACHTER_AB-02_ptmcvz.png" alt="" className="w-[280px] sm:w-[400px]" />
            </div>



        </div>
    )
}

export default HeroSection
