import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaBox, FaBrain, FaHeart, FaPen, FaStar } from 'react-icons/fa'
import { IoIosChatbubbles, IoMdMail } from 'react-icons/io'
import { TbChecklist } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'
import { FaQuestion } from 'react-icons/fa6'

const Terms = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    const process = [
        { heaiding: 'Usage rights', para: 'Personal use is included by default. If you plan to use the art for merch, ads, paid content, or larger commercial use, let us know before we start so we can confirm the rights clearly.' },

        { heaiding: 'Revisions', para: 'Revision rounds are included during the agreed stages. Big changes after sketch approval, final rendering, or rigging may affect the timeline or cost, but we will always tell you first.' },

        { heaiding: 'Refunds', para: 'Refunds can be discussed before work begins. Once the project has started, refunds are usually not available, but if something goes wrong, we will talk through the best way to handle it.', },

        { heaiding: 'Project start', para: 'Your project starts once the scope, price, timeline, and upfront payment are confirmed.' },

        { heaiding: 'Updates', para: 'Progress and previews are shared through Discord or X / Twitter. Staying responsive helps us avoid delays and keep the project moving smoothly.' },

        { heaiding: 'Rigging options', para: 'We can help with Live2D and 3D rigging depending on the project. If you need rigging included, mention it when you send your request.' },

        { heaiding: 'Payment terms', para: 'Most projects are split into 50% upfront and 50% before final delivery. Available payment methods can be confirmed before starting.' },

    ]
    return (
        <div className=' bg-secondaryDark flex flex-col items-center px-4 sm:px-28  2xl:px-80 py-20  text-textDark  relative '>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}


            {/* shading circle yaha sai khatam bus ok  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent ' />

            <h1 className='font-kaushans text-headingDark text-5xl'>Before we start your commission</h1>
            <p data-aos="fade-up" className='text-center lg:text-lg text-sm w-full my-6  '>A few simple notes so the process stays clear, fair, and comfortable for both sides.
            </p>

            <div className='w-full grid  lg:grid-cols-2 grid-cols-1 gap-8 mt-6'>
                {process.map((process, idx) => (
                    <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className='col-span-1 row-span-1 p-4 flex sm:flex-row flex-col rounded-md transition-all cursor-pointer sm:gap-y-2 gap-y-6 text-headingDark sm:items-center'>
                        <span className=' w-fit  text-5xl bg-buttonPrimary/20 rounded-full p-4 '>
                            <FaQuestion/>
                        </span>
                        <div className='sm:px-5 space-y-3'>
                            <h1 className='text-xl font-bold'>{process.heaiding}</h1>
                            <p className='font-merryWeater'>{process.para}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='w-full text-center text-xl font-semibold z-20 sm:px-20  mt-10'>YumeArc only works through our official Discord, X / Twitter, website, and listed team members. If someone claims to represent us outside our official platforms, please check with us before sharing project details or making payment.</h1>

        </div>
    )
}

export default Terms
