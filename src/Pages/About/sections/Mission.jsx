import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaStar, FaShieldAlt, FaPaintBrush, FaEye } from 'react-icons/fa'

const Mission = () => {
    return (
        <section className='w-full bg-primaryDark text-headingDark sm:pb-20  px-4 sm:px-12 xl:px-64  2xl:px-80  py-10  flex flex-col justify-center items-center relative  gap-y-10'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <AOSInitializer />
            <h1 data-aos="flip-up" className='  font-kaushans  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                What we care about

            </h1>

            <div className='w-full space-y-6 mt-6'>
                <div className='flex items-start gap-4'>
                    <FaStar className='text-2xl mt-1 text-iconColor' />
                    <div>
                        <h1 className='text-xl font-semibold'>Originality over templates</h1>
                        <p className='text-lg font-light mt-1'>We don&rsquo;t want your model or stream assets to feel like something anyone else could use. The goal is to make the design feel personal to your character.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4'>
                    <FaEye className='text-2xl mt-1 text-iconColor' />
                    <div>
                        <h1 className='text-xl font-semibold'>Story before style</h1>
                        <p className='text-lg font-light mt-1'>Pretty art matters, but the lore, mood, personality, and background of the character should guide the visual direction.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4'>
                    <FaShieldAlt className='text-2xl mt-1 text-iconColor' />
                    <div>
                        <h1 className='text-xl font-semibold'>Clean, creator-safe work</h1>
                        <p className='text-lg font-light mt-1'>We focus on expressive anime-style visuals without NSFW or extreme themes, so the work feels safe to build a community around.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4'>
                    <FaPaintBrush className='text-2xl mt-1 text-iconColor' />
                    <div>
                        <h1 className='text-xl font-semibold'>Details that actually matter</h1>
                        <p className='text-lg font-light mt-1'>Colors, outfit choices, expressions, panels, and small visual cues should all support the same character identity.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission
