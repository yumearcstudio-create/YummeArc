import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import Img2 from '../../../Assets/Images/about/2.png'
import { Link } from 'react-router-dom'

const Story = () => {
  return (
    <section className='w-full bg-primaryDark text-headingDark sm:pb-20  px-4 sm:px-12 xl:px-64  2xl:px-80   xl:pt-40 sm:py-0 py-6 flex flex-col justify-center items-center relative min-h-screen gap-y-10'>
      <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

      <AOSInitializer />
      <h1 data-aos="flip-up" className='   font-kaushans lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
        How YumeArc Began


      </h1>
      <div className='w-full flex md:flex-row flex-col justify-evenly items-center gap-x-10'>
        <p data-aos="fade-up" className='lg:text-xl text-lg text-center mt-6'>
          YumeArc was born from a simple idea that a VTuber model isn’t just “art,” it’s a living part of your story.
          We started as anime fans creating designs for friends, but quickly realized there was a need for models that felt personal, not generic.
          Since then, we’ve worked with streamers worldwide, turning backstories into fully realized characters that connect with their audience on an emotional level
        </p>

        

      </div>

      <Link to={"/portfolio"} className=' my-6 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>See Our Full Portfolio</Link>

      <div className='w-full flex md:flex-row flex-col justify-center items-center'>
        <h1 className='text-2xl sm:text-5xl lg:text-7xl font-semibold sm:text-left text-center'>Every Story Starts With a Character..</h1>
        <img src={Img2} alt="" className='xl:w-[500px] md:w-[400px]  ' />
      </div>
    </section>
  )
}

export default Story
