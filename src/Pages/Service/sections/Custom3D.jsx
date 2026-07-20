import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import custom3dImg from '../../../Assets/Images/ServiceImages/custom-3d-model.png'


const Custom3D = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10 px-4  sm:px-20 xl:px-28 3xl:px-80  text-textDark bg-secondaryDark relative py-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />


            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-16 px-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom 3D VTuber Models
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    A stylized 3D VTuber model designed around your character's theme, outfit, colors, and stream personality. Built for creators who want a more flexible model that can move naturally on stream.

                </p>

                <ul>
                    <li>
                        Custom outfit, colors, and character styling
                    </li>
                    <li>
                        Full-body movement and face tracking support
                    </li>
                    <li>
                        Built around your lore and visual direction
                    </li>
                    <li>

                        Prepared for VSeeFace, VRoid, or Animaze use
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Start a 3D Model</button>

                </div>


            </div>


            <div data-aos="fade-top" className='col-span-1 3xl:h-[26rem] h-[30rem]   ' style={{ backgroundImage: `url(${custom3dImg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        </div>

    )
}

export default Custom3D
