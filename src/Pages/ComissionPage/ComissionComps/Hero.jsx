import React, { useContext } from 'react'
import heroVid from '../../../Assets/Videos/HomeHeroVideo.mp4'
import heroImg from '../../../Assets/Images/comission/heroImg.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaArrowDown } from 'react-icons/fa'
import ShadePurple from '../../../Common/ShadePurple'
import Star from '../../../Common/Star'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const Hero = () => {
    const {setIsFormOpen} = useContext(ContextAPI)
    return (

        <div className='relative overflow-hidden'>


            <div className='w-full xl:h-[37rem] lg:h-[40rem] h-auto bg-secondaryDark text-textDark   px-4 xl:px-28 sm:px-20  2xl:px-80   flex  '>


                {/* <span className='w-full h-full absolute top-0 left-0 z-20  bg-pinkText/50' /> */}
                <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

                <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />
                {/* stars add hai idhersai  */}
                <Star className={'text-5xl  left-32 top-28'} />
                <Star className={'text-5xl  right-32 top-28'} />
                {/* <Star className={'text-5xl '}/> */}
                <Star className={'text-4xl  left-44 top-56 '} />
                <Star className={'right-10 bottom-56'} />




                <span className='w-full h-full absolute top-0 z-20 right-0 bg-gradient-to-tl from-secondaryDark
                to-transparent' />

                <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />

                <AOSInitializer duration={500} offset={20} />

                <div className='w-full z-30 flex justify-center  flex-col lg:flex-row gap-10 pt-28 '>
                    {/* Home text  */}
                    <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start md:items-center pt-10 space-y-12 '>

                        <h1 className=' font-[600]  lg:text-[3.5rem] text-5xl leading-[1.1] text-headingDark'>
                            Start Your Custom VTuber Journey ✨


                        </h1>
                        <p className='text-xl font-merryWeater'>We turn stories, ideas & dreams into stream-ready magic.
                            It starts with one message 

                        </p>

                        <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg  '>
       
                            <button onClick={() => setIsFormOpen(true)} className='  px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'> Let’s Begin </button>
                        </div>
                    </div>

                    <div loading='lazy' data-aos="fade-in" className=' lg:w-1/2 w-full lg:h-full h-[30rem] pt-4  ' style={{ backgroundImage: `url("${heroImg}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />





                </div>



            </div>



        </div>
    )
}

export default Hero
