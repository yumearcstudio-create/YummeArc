import React from 'react'

import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const CreativeBoundaries = () => {
    return (
        <section className='w-full bg-primaryDark text-headingDark pt-10 pb-20 px-4 sm:px-12 xl:px-64 2xl:px-80 flex flex-col justify-center items-center relative gap-8'>
            <AOSInitializer />
            <h1 data-aos="flip-up" className='font-kaushans lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                Our Creative Boundaries
            </h1>

            <div className='w-full max-w-4xl flex flex-col gap-6'>
                <p data-aos="fade-up" className='lg:text-lg text-base text-center'>
                    At YumeArc, we welcome a wide range of anime, gaming, and fantasy concepts, while keeping a few boundaries around the projects we take on.
                </p>
                <p data-aos="fade-up" className='lg:text-lg text-base text-center'>
                    We don&rsquo;t accept NSFW commissions involving sexual or fetish-focused content, regardless of the project&rsquo;s size or level of detail. We also avoid projects centered on religious or anti-religious messaging, devil worship, or heavily devil-focused themes.
                </p>
                <p data-aos="fade-up" className='lg:text-lg text-base text-center'>
                    Dark fantasy and certain demon-inspired character designs may still be considered depending on their overall concept, design, and lore. If you&rsquo;re unsure whether your idea fits, feel free to share a brief description and references with us before placing an order.
                </p>
            </div>
        </section>
    )
}

export default CreativeBoundaries
