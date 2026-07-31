import React, { useContext } from 'react'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import whyYmmearc from '../../../Assets/Images/HomeImages/still-figuring-out-your-character.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'


const Heart = () => {
    const { setIsFormOpen } = useContext(ContextAPI)

    return (
        <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10    text-textDark bg-secondaryDark relative pt-10  px-4  sm:px-20 xl:px-28 3xl:px-80'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:p-16 p-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className='w-full text-left z-20  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  text-headingDark font-kaushans'>
                    Still figuring out your character?
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>That&rsquo;s normal. Some creators come with pages of lore. Some come with a messy idea, a few references, or just a feeling they can&rsquo;t fully explain yet.

                </p>

                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    Maybe you know the personality but not the outfit. Maybe you have the backstory but no clear visual direction. Or maybe your current model is close, but something still feels missing.
                </p>

                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    We help turn those pieces into a clearer direction: the mood, colors, outfit details, expressions, panels, and stream visuals that actually fit the character you&rsquo;re trying to build.

                </p>

                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    So even if your idea isn&rsquo;t fully shaped yet, we can help make it feel more like you.

                </p>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Start a Project</button>
                </div>


            </div>

            <div data-aos="fade-top" className='col-span-1 h-full min-h-[26rem]  ' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />


        </div>

    )
}

export default Heart
