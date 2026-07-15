import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaBox, FaBrain, FaHeart, FaPen, FaStar } from 'react-icons/fa'
import { IoIosChatbubbles, IoMdMail } from 'react-icons/io'
import { TbChecklist } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'

const OurProcess = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    const process = [
        { heaiding: 'Reach out', para: 'Send us a message through Discord, X / Twitter, or the request form.', icon: < IoMdMail/> },
        { heaiding: 'Share what you have', para: 'Lore, references, current model, moodboards, rough notes, or just the feeling you want your character to give off.', icon: <IoIosChatbubbles /> },
        { heaiding: 'We clarify the direction', para: 'We talk through the details, suggest what fits, and confirm the service, price, timeline, and next steps.', icon: <TbChecklist /> },
        { heaiding: 'Project begins', para: 'Once the upfront payment is confirmed, we start with the agreed direction and keep you updated through the process.', icon: <BsStars /> },

    ]
    return (
        <div className=' bg-primaryDark flex flex-col items-center px-4 sm:px-28  2xl:px-80 py-10   text-textDark  relative'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}


            {/* shading circle yaha sai khatam bus ok  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent ' />
            <h1 className='w-full text-left z-20  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  text-headingDark font-kaushans'>How we start your project</h1>
            <p data-aos="fade-up" className='text-left lg:text-lg text-sm w-full my-6  '>You don't need everything perfectly planned before reaching out. Send what you have, and we'll help shape the direction from there.
            </p>

            <div className='w-full grid  lg:grid-cols-2 grid-cols-1 gap-8 mt-6'>
                {process.map((process, idx) => (
                    <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className='col-span-1 row-span-1 p-4 flex rounded-md transition-all cursor-pointer  text-headingDark items-center'>
                        <span className='  text-2xl sm:text-5xl bg-buttonPrimary/20 rounded-full p-4'>
                            {process.icon}
                        </span>
                        <div className='px-5'>
                            <h1 className='text-xl font-bold'>{process.heaiding}</h1>
                            <p className='font-merryWeater sm:text-lg text-sm '>{process.para}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurProcess
