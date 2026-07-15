

import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'


const Sec8_pfp = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 z-30 grid lg:grid-cols-2 grid-cols-1 gap-10   text-textDark bg-primaryDark relative md:py-20'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <div data-aos="fade-top" className='col-span-1 3xl:h-[26rem] h-[30rem]   order-2 lg:order-1' style={{ backgroundImage: `url("https://res.cloudinary.com/dqflexfdy/image/upload/v1754813039/sec8_pfp_tzhzpn.png")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-16 px-4 min-h-[24rem] 
            order-1 lg:order-2'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom PFP Design
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    Profile art designed to make your character easy to recognize across Twitch, Discord, X, YouTube, and other socials. We focus on the expression, colors, and small details that still read clearly in a tiny profile circle.
                </p>

                <ul>
                    <li>
                        Designed around your character's look and personality
                    </li>
                    <li>
                        Clear expression and readable silhouette
                    </li>
                    <li>
                         Sized for profiles, socials, and community spaces

                    </li>
                    <li>
                        Can be soft, cute, chaotic, dark, cozy, or fully themed
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'>Create My PFP</button>

                </div>


            </div>




        </div>

    )
}

export default Sec8_pfp
