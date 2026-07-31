import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import Img2 from '../../../Assets/Images/about/2.png'
import { Link } from 'react-router-dom'

const Story = () => {
  return (
    <section className='w-full bg-primaryDark text-headingDark pt-12 pb-6 px-4 sm:px-12 xl:px-64  2xl:px-80 flex flex-col justify-center items-center relative gap-y-8'>
      <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

      <AOSInitializer />
      <h1 data-aos="flip-up" className='   font-kaushans lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
        How YumeArc began


      </h1>
      <div className='w-full flex md:flex-row flex-col justify-evenly items-center gap-x-10'>
        <p data-aos="fade-up" className='lg:text-xl text-lg text-center mt-6'>
          YumeArc started from something we kept seeing with creators: they had lore, personality, references, and ideas in their head, but didn&rsquo;t always know how those things should look visually. A character can have a strong backstory, but still feel hard to turn into colors, outfits, expressions, panels, or stream scenes.

        </p>

        

      </div>

      <p data-aos="fade-up" className='lg:text-xl text-lg text-center'>
        That&rsquo;s where we wanted YumeArc to be different. We don&rsquo;t just ask what you want drawn. We listen to the character you&rsquo;re trying to build, help clarify the direction, and then create visuals that feel personal, connected, and easier for your audience to remember.
      </p>

      <Link to={"/portfolio"} className=' my-6 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>See Our Work</Link>

      <div className='w-full flex md:flex-row flex-col justify-center items-center' style={{display: 'none'}}>
        <h1 className='text-2xl sm:text-5xl lg:text-7xl font-semibold sm:text-left text-center'>Every Story Starts With a Character..</h1>
        <img src={Img2} alt="" className='xl:w-[500px] md:w-[400px]  ' />
      </div>
    </section>
  )
}

export default Story
