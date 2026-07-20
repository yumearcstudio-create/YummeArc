import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import angelModel from '../../../Assets/Images/HomeImages/angel-model.png'


const Custom = () => {
    const {setIsFormOpen} = useContext(ContextAPI)
    return (
        <div id="custom-live2d" className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10   text-textDark bg-primaryDark relative py-20'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            
            <div data-aos="fade-top" className='col-span-1 3xl:h-[26rem] h-[30rem] order-2 lg:order-1' style={{ backgroundImage: `url(${angelModel})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

            <div className='col-span-1   text-left  flex flex-col  gap-y-6 sm:px-16 px-4 order-1 lg:order-2'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom Live2D VTuber Models
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    A custom Live2D model built around your character's lore, personality, colors, and stream presence. Whether your idea is fully planned or still messy, we help shape the visual direction before moving into the final model.

                </p>

                <ul>
                    <li>
                        Built around your lore and references
                    </li>
                    <li>
                        Custom outfit, colors, expressions, and character details
                    </li>
                    <li>
                        Live2D-ready model art and rigging options
                    </li>
                    <li>
                        Prepared for VTube Studio and stream use
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Start a Live2D Model</button>

                </div>


            </div>

        </div>

    )
}

export default Custom
