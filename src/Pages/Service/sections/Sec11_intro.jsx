import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'


const Sec11_intro = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 z-30 grid lg:grid-cols-2 grid-cols-1 sm:gap-10   text-textDark bg-primaryDark relative py-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72  opacity-35'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72  opacity-35'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <div
                data-aos="fade-top"
                className="2xl:w-[700px] md:w-[600px] sm:w-[500px] w-[350px] 3xl:h-[26rem] h-[30rem]  mx-auto order-2 lg:order-1"
            >
                <video
                    src="https://res.cloudinary.com/dqflexfdy/video/upload/v1754819069/WhatsApp_Video_2025-08-08_at_19.16.47_badd7726_ryhbj8.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                />
            </div>

            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-16 px-4 min-h-[24rem] order-1 lg:order-2'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Intro / Outro Animation

                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    Short animated visuals made for stream openings, endings, debuts, transitions, or lore moments. We build the animation around your character's mood, theme, and atmosphere so it feels like part of your world, not just a random animated screen.

                </p>

                <ul>
                    <li>
                        Designed around your character theme and lore
                    </li>
                    <li>
                        Great for openings, endings, debuts, and transitions
                    </li>
                    <li>
                        Can include 2D or 3D-style scene direction
                    </li>
                    <li>
                        Prepared for Twitch, YouTube, Kick, OBS, or Streamlabs
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Create My Animation</button>

                </div>


            </div>


        </div>

    )
}

export default Sec11_intro
