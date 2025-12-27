

import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'


const CTA = () => {
    const {setIsFormOpen} = useContext(ContextAPI)
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 z-30 flex md:flex-row flex-col justify-between items-center gap-10   text-textDark bg-secondaryDark relative py-20'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />

            <div className='md:w-2/3 w-full  justify-center text-left  flex flex-col  gap-y-6 sm:p-16 p-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Let’s Create Something Magical Together

                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>Whether it’s a new model, emotes, or full stream setup we’re here to build what your audience will love. Just say hi and we’ll handle the rest

                </p>

                



                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    {/* <button className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Start My Commission</button> */}

                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-white font-semibold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md border-[1px] border-white'> Send Me a Concept</button>
                </div>


            </div>

            <div className='sm:px-20'>
                <div data-aos="fade-top" className='h-[500px] md:w-[350px] w-[300px]' style={{ backgroundImage: `url('https://res.cloudinary.com/dqflexfdy/image/upload/v1766835314/lera_support-01_1_h6mlpc.png')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            </div>


        </div>

    )
}

export default CTA
