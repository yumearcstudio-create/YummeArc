import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import heroImg from '../../../Assets/Images/portfolio/every-piece-starts-with-a-character.png'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const Hero = () => {
    const {setIsFormOpen} = useContext(ContextAPI)
    return (
        <div className='w-full bg-secondaryDark text-headingDark sm:pb-20  pt-32  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col justify-center items-center relative sm:min-h-screen'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer />
            <h1 data-aos="flip-up" className='  font-kaushans  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                Every piece starts with a character.

            </h1>
            <p data-aos="fade-up" className='lg:text-2xl text-lg text-center mt-6'>
                Explore custom models, chibi panels, emotes, PFPs, stream scenes, and visual assets made to reflect each creator's lore, personality, and visual direction.
            </p>


            <button onClick={() => setIsFormOpen(true)} className=' my-6 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'>Start Your Project</button>

            {/* <img src={heroImg} alt="" className='w-[800px]  ' /> */}
            <div className='w-[90%]  lg:w-[1000px] h-[300px] sm:h-[500px]  ' style={{
                backgroundImage : `url(${heroImg})`,
                backgroundSize: 'contain',
                backgroundPosition : 'center',
                backgroundRepeat : 'no-repeat'
            }}></div>


        </div>
    )
}

export default Hero
