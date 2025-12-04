import React from 'react'
import { MdCall, MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaFacebook, FaHandshake, FaInstagram, FaLocationDot, FaSnapchat, FaTwitch, FaTwitter, FaX, FaXTwitter } from "react-icons/fa6";
import TrustPilotBadge from '../../components/TrustPilotBadge';


const Footer = () => {
    return (
        <div className='w-full space-y-8  relative bg-primaryDark text-headingDark'>

            <div className='grid px-4 sm:px-12 py-20  2xl:px-80 lg:grid-cols-3 gap-20 w-full'>

                <div className='space-y-8 cols-span-1 '>
                    {/* Logo image started  */}
                    {/* <img className='w-[5rem]' src="https://upload.wikimedia.org/wikipedia/en/e/eb/JDC_Foundation_Logo.png" alt="Logo " /> */}
                    <Link to="/" >
                        <img src="https://res.cloudinary.com/dqflexfdy/image/upload/v1755023786/YummeArc-05_e2vbff.png" alt="yumearc logo" className='sm:w-28 w-20' /></Link>

                    {/* Logo image done  */}
                    <h1 className='font-bold text-xl '> <i> Where Your Story Becomes a Virtual Star ✨</i></h1>

                    <div className='w-full flex gap-x-6 '>

                        <a href="https://x.com/yumearcstudio?s=21" target='_blank' className='hover:scale-125 transition-all' ><FaXTwitter size={"2em"} /></a>

                        <a href="https://www.twitch.tv/" target='_blank' className='hover:scale-125 transition-all' ><FaTwitch size={"2em"} /></a>


                    </div>
                </div>

                <div className='space-y-6 cols-span-1 '>
                    <h1 className='text-xl font-bold'>Quick Links</h1>

                    <div className='flex flex-col gap-y-3 '>
                        <Link to={"/"} className='text-lg font-semibold underline z-10 '>Home</Link>



                        <Link to={"/portfolio"} className='text-lg font-semibold underline z-10 '>Portfolio</Link>

                        <Link to={"/about"} className='text-lg font-semibold underline z-10 '>About</Link>
                        <Link to={"/service"} className='text-lg font-semibold underline z-10 '>Service</Link>

                        <Link to={"/comission"} className='text-lg font-semibold underline z-10 '>Comission</Link>
                    </div>

                </div>

                <div className='space-y-6 cols-span-1'>
                    <h1 className='text-xl font-bold'>Contact Us </h1>

                    <div className='flex flex-col gap-y-4 '>
                        <div className='flex '>
                            <MdEmail size={"2em"} />
                            <p className='px-4 text-lg font-semibold underline'>studio@yumearc.com</p>
                        </div>

                        <div className='flex '>
                            <FaLocationDot size={"2em"} />
                            <p className='px-4 text-lg font-semibold underline'>Belle Mead, New Jersey, USA</p>
                        </div>


                        <div className='flex '>
                            <FaHandshake size={"2em"} />

                            <p className='px-4 text-lg font-semibold underline flex-1'>In Partnership with Vision Tech Solutions and Services LLC
56 Chestnut Street Edison 08817 NJ</p>
                        </div>

                        <TrustPilotBadge
                            
                        />



                    </div>
                </div>
            </div>

            <div className=' w-full  py-4 text-center bg-primaryDark text-white font-semibold text-xl'> © 2025 YummeArc — Made with sparkles, stories & coffee ☕✨

            </div>
        </div>
    )
}

export default Footer