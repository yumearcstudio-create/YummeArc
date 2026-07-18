import React from 'react'

import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaStar, FaShieldAlt, FaPaintBrush, FaEye } from 'react-icons/fa'

const CreativeProcess = () => {
    return (
        <div className='w-full bg-secondaryDark text-headingDark pb-20 pt-10 px-4 sm:px-12 xl:px-64 2xl:px-80 flex flex-col items-center relative gap-10'>

            <span className='w-full h-1/5 absolute top-0 z-0 left-0 bg-gradient-to-b from-primaryDark
                to-transparent' />
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer />

            <h1 data-aos="flip-up" className='font-kaushans lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold mb-4'>
                What we care about
            </h1>

            <img data-aos="fade-up" src={'https://res.cloudinary.com/dqflexfdy/image/upload/v1766835196/lera_schedule-01_1_vttipc.png'} alt="" className='max-[991px]:block min-[992px]:hidden w-full' />

            <div className='w-full flex max-[991px]:flex-col min-[992px]:flex-row justify-between items-center gap-10'>
                <div className='flex-1 flex flex-col gap-6'>
                    <div data-aos="fade-up" className='flex items-start gap-4'>
                        <FaStar style={{minWidth: '20px', minHeight: '20px', width: '20px', height: '20px'}} className='mt-1 text-iconColor' />
                        <div>
                            <h1 className='text-xl font-semibold'>Originality over templates</h1>
                            <p className='text-lg font-light mt-1'>We don&rsquo;t want your model or stream assets to feel like something anyone else could use. The goal is to make the design feel personal to your character.</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex items-start gap-4'>
                        <FaEye style={{minWidth: '20px', minHeight: '20px', width: '20px', height: '20px'}} className='mt-1 text-iconColor' />
                        <div>
                            <h1 className='text-xl font-semibold'>Story before style</h1>
                            <p className='text-lg font-light mt-1'>Pretty art matters, but the lore, mood, personality, and background of the character should guide the visual direction.</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex items-start gap-4'>
                        <FaShieldAlt style={{minWidth: '20px', minHeight: '20px', width: '20px', height: '20px'}} className='mt-1 text-iconColor' />
                        <div>
                            <h1 className='text-xl font-semibold'>Clean, creator-safe work</h1>
                            <p className='text-lg font-light mt-1'>We focus on expressive anime-style visuals without NSFW or extreme themes, so the work feels safe to build a community around.</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex items-start gap-4'>
                        <FaPaintBrush style={{minWidth: '20px', minHeight: '20px', width: '20px', height: '20px'}} className='mt-1 text-iconColor' />
                        <div>
                            <h1 className='text-xl font-semibold'>Details that actually matter</h1>
                            <p className='text-lg font-light mt-1'>Colors, outfit choices, expressions, panels, and small visual cues should all support the same character identity.</p>
                        </div>
                    </div>
                </div>

                <img data-aos="fade-left" src={'https://res.cloudinary.com/dqflexfdy/image/upload/v1766835196/lera_schedule-01_1_vttipc.png'} alt="" className='max-[991px]:hidden min-[992px]:block min-[992px]:w-[400px] w-full' />
            </div>

        </div>
    )
}

export default CreativeProcess
