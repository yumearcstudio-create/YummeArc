import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import introImg from '../../../Assets/Images/ServiceImages/intro-outro.png'


const Sec11_intro = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 z-30 grid lg:grid-cols-2 grid-cols-1 sm:gap-10   text-textDark bg-primaryDark relative pt-20 pb-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72  opacity-35'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72  opacity-35'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <div data-aos="fade-top" className='2xl:w-[760px] md:w-[660px] sm:w-[560px] w-[390px] 3xl:h-[28rem] h-[32rem] mx-auto order-2 lg:order-1' style={{ backgroundImage: `url(${introImg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-16 px-4 min-h-[24rem] order-1 lg:order-2'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom PNGTuber Model

                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    A custom PNGTuber designed around your character's look, personality, and stream vibe. A great option if you want an expressive on-screen identity without jumping straight into a full Live2D model.

                </p>

                <ul>
                    <li>
                        Designed around your character theme, colors, and vibe
                    </li>
                    <li>
                        Includes idle and talking PNG states
                    </li>
                    <li>
                        Optional extra expressions for reactions and stream moments
                    </li>
                    <li>
                        Ready for PNGTuber Plus, Discord reactive use, or stream setup
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Create My PNGTuber</button>

                </div>


            </div>


        </div>

    )
}

export default Sec11_intro
