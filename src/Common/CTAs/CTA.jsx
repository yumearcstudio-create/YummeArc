import React, { useContext } from 'react'
import AOSInitializer from '../AOS/AOSInitializer'
import { Link } from 'react-router-dom'
import { ContextAPI } from '../../GlobalProvider/ContextAPI'

const CTA = ({heading , para , cta1 ,ctaLink1 , cta2 ,ctaLink2 }) => {
        const { setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full 2xl:px-80 px-8 bg-gradient-to-tl from-primaryDark to-secondaryDark text-headingDark  flex flex-col justify-center items-center py-24 relative text-center z-30'>
            <AOSInitializer/>
                <h1 data-aos="flip-up" className=' font-[600] lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]'>
                {heading}
                </h1>
                <p data-aos="fade-up" className='lg:text-xl text-lg my-6' dangerouslySetInnerHTML={{__html : para}}>
                </p>

                <div data-aos="fade-up" className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 bg-buttonPrimary  text-headingDark font-bold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md '>{cta1}</button>
                    {cta2 && (<button onClick={() => setIsFormOpen(true)}  className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300 border-2   text-center rounded-md '>{cta2}</button>)}
                </div>

        </div>
    )
}

export default CTA
