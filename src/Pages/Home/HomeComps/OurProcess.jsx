import React, { useContext, useState } from 'react'
import { our_process } from '../../../WebData/HomeData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import bgImage from '../../../Assets/Images/BG/stars.png'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const OurProcess = () => {
    const [isActive, setIsActive] = useState(null)
        const { setIsFormOpen} = useContext(ContextAPI)
    

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full  px-4  sm:px-20 xl:px-28 3xl:px-80  flex flex-col  items-center   relative 
          py-20 bg-primaryDark text-textDark ' >
            <AOSInitializer />

            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />
            <span className='absolute top-0 left-0 w-full h-full opacity-10' style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: '120%' }}></span>

            <h1 data-aos="flip-up" className='w-full text-center  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark  font-kaushans'>From rough idea to stream-ready visuals</h1>

            <div className='w-full grid  grid-cols-1 gap-8 mt-6'>
                {our_process.map((process, idx) => (
                    <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className='col-span-1 row-span-1 p-4 flex rounded-md transition-all cursor-pointer bg-buttonPrimary text-headingDark'>
                        <span className=' h-full  text-5xl'>
                            {process.icon}
                        </span>
                        <div className='px-5'>
                            <h1 className='text-xl font-bold'>{process.heaiding}</h1>
                            <p className='font-merryWeater'>{process.para}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full flex flex-col gap-y-4 justify-center items-center text-center mt-10 z-20'>
                <h1 className='font-semibold text-2xl '>
                    Have something custom in mind? Let’s make it real together

                </h1>
                <span onClick={() => setIsFormOpen(true)} className='text-xl bg-buttonPrimary text-headingDark font-semibold px-8 py-2 rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-2  mt-10'>
                    Start a Custom Project 
                </span>
            </div>

        </div>
    )
}

export default OurProcess
