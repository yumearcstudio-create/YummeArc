import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Hero = () => {
    return (
        <div className='w-full bg-secondaryDark text-headingDark min-h-fit px-4 sm:px-12 xl:px-64 2xl:px-80 pt-40 pb-20 flex flex-col items-center relative'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer/>

            <img loading='lazy' data-aos="fade-up" src={'https://res.cloudinary.com/dqflexfdy/image/upload/v1770210253/services-hero-webp_yiunzi.webp'} alt="" className='max-[991px]:block min-[992px]:hidden w-[400px] mt-6' />

            <div className='w-full max-w-[1200px] flex max-[991px]:flex-col min-[992px]:flex-row justify-between items-center gap-10 mt-6'>
                <div className='flex-1 flex flex-col'>
                    <h1 data-aos="flip-up" className='lg:text-5xl sm:text-4xl text-2xl leading-[1.1] w-full text-left font-bold mb-4'>
                        Services built around your character, not just your order.
                    </h1>
                    <p data-aos="fade-up" className='lg:text-xl text-lg'>From Live2D models and PNGTubers to chibi panels, emotes, overlays, and stream scenes, we create assets that feel connected to your lore, personality, and the way you want to show up online.</p>
                    <a href="#custom-live2d" data-aos="fade-up" className='mt-10 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2 inline-block w-fit relative z-30'>
                        Explore Services
                    </a>
                </div>

                <img loading='lazy' data-aos="fade-left" src={'https://res.cloudinary.com/dqflexfdy/image/upload/v1770210253/services-hero-webp_yiunzi.webp'} alt="" className='max-[991px]:hidden min-[992px]:block min-[992px]:w-[500px] w-full' />
            </div>
        </div>
    )
}

export default Hero
