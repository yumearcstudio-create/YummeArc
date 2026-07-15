import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { BsCash } from 'react-icons/bs'
import { RiLoopLeftLine } from 'react-icons/ri'
import { CiCreditCard1 } from 'react-icons/ci'
import { FaHandshakeSimple } from 'react-icons/fa6'
import image from '../../../Assets/Images/comission/3.png'
const Costs = () => {
    return (
        <div className='w-full px-4 bg-secondaryDark sm:px-28  2xl:px-80  flex lg:flex-row flex-col  relative 
          text-textDark py-10 gap-y-6'>
            <AOSInitializer />

            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 z-10 sm:opacity-75 opacity-35'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 z-10 sm:opacity-75 opacity-35'} />

            {/* shading circle yaha sai khatam bus ok  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <div className='flex-1 space-y-6 z-20'>
                <h1 data-aos="flip-up" className='w-full text-left z-20  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  text-headingDark font-kaushans'>So... how much does it cost? </h1>

            <p className='text-xl w-2/3'>Every project is different, so we don't use one fixed price for every model, panel, or stream asset. The final quote depends on the style, complexity, number of assets, rigging, animation, and how much direction we need to help shape.


            </p>

            <p className='text-xl w-2/3'>Before anything starts, we'll confirm the scope, price, timeline, and what's included, so you know exactly what you're paying for. If you have a budget in mind, you can share it with us and we'll tell you what makes the most sense within that range.
            </p>

                <ul className='text-xl space-y-3 flex-1 '>
                    <li className='flex gap-x-3 items-center'> <BsCash size="1.4em" /> Clear quote before starting</li>
                    <li className='flex gap-x-3 items-center'> <RiLoopLeftLine size="1.4em" /> Usually 50% upfront and 50% before final delivery</li>
                    <li className='flex gap-x-3 items-center'> <CiCreditCard1 size="1.4em" /> Revision rounds included during the agreed stages</li>
                    <li className='flex gap-x-3 items-center'> <FaHandshakeSimple size="1.4em" /> Payment options discussed before the project begins</li>

                </ul>
            </div>

                <div className='flex-1 '>
                    <img src={'https://res.cloudinary.com/dqflexfdy/image/upload/v1766835482/lera_rules-01_1_y0xmee.png'} className='w-[500px] '/>
                </div>
        </div>
    )
}

export default Costs
