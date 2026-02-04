import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Hero = () => {
    return (
        <div className='w-full bg-secondaryDark text-headingDark min-h-fit   px-4 sm:px-12 xl:px-64  2xl:px-80  pt-40 pb-20 flex flex-col justify-center items-center relative'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer/>
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                Every Stream Deserves Story-Driven Art
            </h1>
            <p  data-aos="fade-up" className='lg:text-xl text-lg text-center mt-6'>We create handcrafted art services for VTubers who want emotion, detail, and anime-level energy.
            </p>

            
            <img loading='lazy' src={'https://res.cloudinary.com/dqflexfdy/image/upload/v1770210253/services-hero-webp_yiunzi.webp'} alt="" className='md:w-[500px] w-[400px] mt-10 '/>


        </div>
    )
}

export default Hero
