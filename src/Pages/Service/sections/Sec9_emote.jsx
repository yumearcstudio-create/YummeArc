import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import emotesImg from '../../../Assets/Images/ServiceImages/emotes-badges.png'


const Sec9_emote = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 z-30 grid lg:grid-cols-2 grid-cols-1 sm:gap-10  text-textDark bg-secondaryDark relative py-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />


            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-8 px-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom Emotes & Badges
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    Expressive emotes and badges made for chat reactions, community moments, and the little inside jokes that make your stream feel alive. We design them to match your character's expressions, colors, and personality so they feel like part of your identity.

                </p>

                <ul>
                    <li>
                       Custom expressions based on your character
                    </li>
                    <li>
                        Emotes for hype, laughs, reactions, alerts, and community moments

                    </li>
                    <li>
                      Subscriber badges or loyalty icons matched to your theme


                    </li>
                    <li>
                       Sized and prepared for Twitch, Discord, YouTube, or Kick

                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'>Create My Emotes</button>

                </div>


            </div>


            <div data-aos="fade-top" className='2xl:w-[500px] md:w-[400px] sm:w-[350px] w-[280px] 3xl:h-[20rem] h-[24rem] mx-auto' style={{ backgroundImage: `url(${emotesImg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        </div>

    )
}

export default Sec9_emote
