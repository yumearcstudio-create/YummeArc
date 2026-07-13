import React, { useContext } from 'react'
import heroImg from '../../../Assets/Images/HomeImages/HeroImg.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaArrowDown } from 'react-icons/fa'
import ShadePurple from '../../../Common/ShadePurple'
import Star from '../../../Common/Star'
import { Link } from 'react-router-dom'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const Hero = () => {
        const {isFormOpen , setIsFormOpen , scrwidth} = useContext(ContextAPI)
    
    return (

        <div className='relative overflow-hidden'>

            <div className='w-full xl:h-[37rem] lg:h-[40rem]   bg-secondaryDark text-textDark   px-4  sm:px-20 xl:px-28 3xl:px-80   flex  '>
                <div className='px-5  z-40 rounded-md text-center py-4 text-xl absolute bottom-0  right-0 animate-fadeIn font-bold flex items-center gap-x-4'> Scroll To Explore <FaArrowDown /></div>

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
                to-transparent sm:bg-opacity-80 bg-opacity-50 ' />

                <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-primaryDark
                to-transparent sm:bg-opacity-80 bg-opacity-50' />

                <AOSInitializer duration={500} offset={20} />

                <div className='w-full z-30 flex justify-center  flex-col lg:flex-row gap-10 pt-28 '>
                    {/* Home text  */}
                    <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start md:items-center pt-10 space-y-12 '>

                        <h1 className=' font-[600] text-4xl sm:text-5xl lg:text-[3.5rem]  leading-[1.1] text-headingDark'>
                            Your VTuber shouldn&rsquo;t look like everyone else&rsquo;s.

                        </h1>
                        <p className='text-sm sm:text-xl font-merryWeater'>YumeArc designs custom anime-style models, PNGTubers, and stream visuals that feel like they belong to your character, your lore, and the world you&rsquo;re building.
                        </p>

                        <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg  '>
                            <Link to={"/portfolio"} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'> See Our Work</Link>
                            <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300   text-headingDark border-[1px] sm:hover:-translate-y-2 border-headingDark text-center rounded-md '>Start a Project</button>
                        </div>
                    </div>

                    <div data-aos="fade-in" className='2xl:w-[500px] lg:w-1/2 w-full  h-[30rem]   ' style={{ backgroundImage: `url("${heroImg}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />





                </div>



            </div>



        </div>
    )
}

export default Hero
