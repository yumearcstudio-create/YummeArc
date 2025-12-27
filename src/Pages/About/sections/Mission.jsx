import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import Img5 from '../../../Assets/Images/about/2.png'

const Mission = () => {
    return (
        <section className='w-full bg-primaryDark text-headingDark sm:pb-20  px-4 sm:px-12 xl:px-64  2xl:px-80  py-10  flex flex-col justify-center items-center relative  gap-y-10'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <AOSInitializer />
            <h1 data-aos="flip-up" className='  font-kaushans  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                What We Stand For

            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center mt-6'>
                At YumeArc, our mission is simple help every VTuber feel truly seen, truly unique.
                We believe your design is more than just “cute” it’s a reflection of your soul, your lore, your journey.

            </p>

            <div className='w-full space-y-3'>
                <h1 className='text-xl font-semibold'>Thats Why We : </h1>
                <ul className='text-lg space-y-2 font-light'>
                    <li className='ml-10'>* Craft every model with emotion, not just technique</li>
                    <li className='ml-10'>* Build long-term friendships, not just client lists</li>
                    <li className='ml-10'>* Obsess over details color meanings, backstory, even eye shape</li>
                    <li className='ml-10'>* Always revise until you’re 100% satisfied</li>

                </ul>

                <h1 className='text-xl font-semibold'>We’re not here to follow trends. We’re here to bring stories to life.</h1>

            </div>
            {/* <button className=' my-6 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>See Our Full Portfolio</button> */}

            
        </section>
    )
}

export default Mission
