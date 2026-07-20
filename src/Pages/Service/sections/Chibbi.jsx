import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import chibiImg from '../../../Assets/Images/ServiceImages/chibi-panels.png'


const Chibbi = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10  text-textDark bg-primaryDark relative py-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <div data-aos="fade-top" className='w-[350px] md:w-[500px] mx-auto 3xl:h-[26rem] h-[30rem]  order-2 lg:order-1 
            ' style={{ backgroundImage: `url(${chibiImg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-16 px-4 min-h-[24rem] 
            order-1 lg:order-2'>

                <h1 data-aos="fade-right" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark  font-kaushans'>
                    Custom
                    Chibi Panels
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    Chibi-style stream panels designed around your character, theme, and channel sections. Each panel can have its own small scene, expression, or background so your profile feels more personal than a basic text panel.
                </p>
                <ul>
                    <li>
                        Matched to your model, outfit, and theme
                    </li>
                    <li>
                        Scene-based backgrounds for each section
                    </li>
                    <li>
                        Custom expressions, poses, and small details
                    </li>
                    <li>

                        Sized for Twitch, Kick, Discord, or socials
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'>
                        Build My Chibi Panels
                    </button>

                </div>


            </div>




        </div>

    )
}

export default Chibbi
