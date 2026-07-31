import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import Star from '../../../Common/Star'
import ShadePurple from '../../../Common/ShadePurple'
import heroImg from '../../../Assets/Images/comission/ready-to-talk-through-your-idea.png'

const OrderFrom = () => {
    return (
        <div className='relative overflow-hidden'>


            <div className='w-full  h-auto bg-primaryDark text-textDark   px-4 xl:px-28 sm:px-20  2xl:px-80   flex  '>
                <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent ' />
                <AOSInitializer duration={500} offset={20} />

                <div className='w-full z-30 flex justify-between flex-col lg:flex-row gap-10 pt-28 '>
                    {/* Home text  */}
                    <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start md:items-center pt-10 space-y-12 '>

                        <h1 className=' w-full text-left z-20  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  text-headingDark font-kaushans'>
                            Ready to talk through your idea?
                        </h1>
                        <p className='text-xl font-merryWeater'>Reach out through Discord or X / Twitter and send whatever you have so far: lore, references, a current model, a rough idea, or the feeling you want. We'll help clarify the direction before giving you the next steps.


                        </p>

                        <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg  '>
                            <a
                                href="https://discord.gg/f8Y8yrVNdP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'>Message on Discord 
                            </a>

                            <a
                                href="https://x.com/yumearcstudio?s=21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='px-8 py-2  font-bold cursor-pointer transition-all duration-300   text-headingDark border-[1px] sm:hover:-translate-y-2 border-headingDark text-center rounded-md '>Message on X / Twitter </a>
                        </div>
                    </div>
                    <div data-aos="fade-in" className=' lg:w-[450px] w-full  h-[28rem] pt-4  ' style={{ backgroundImage: `url("${heroImg}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                </div>
            </div>
        </div>
    )
}

export default OrderFrom
