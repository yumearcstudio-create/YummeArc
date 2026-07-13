import React, { useState } from 'react'
import { recentModels, whyYummeArc } from '../../../WebData/HomeData'
import { FollowerPointerCard } from '../../../components/ui/following-pointer'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { Link } from 'react-router-dom'



const RecentWork = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 bg-primaryDark   flex flex-col  items-center  relative space-y-20
         py-20 text-textDark'>
            <AOSInitializer />

            {/* shading circle hai na idher sai start  */}
        <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

        <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

        {/* shading circle yaha sai khatam bus ok  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <h1 data-aos="flip-up" className='w-full text-left z-20  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  text-headingDark font-kaushans'>Featured Work</h1>
            <p data-aos="fade-up" className='w-full text-left z-20 text-lg'>A quick look at models, panels, and stream visuals shaped around each creator&rsquo;s character.</p>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-8 gap-6 '>
                {recentModels.map((model, idx) => (
                    <div data-aos-duration="200" data-aos="flip-right" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ transform: isActive == idx ? 'scale(1.1)' : 'scale(1)', boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }}
                        className='flex-1 min-h-96 bg-purpleTo rounded-2xl overflow-hidden shadow-md transition-all cursor-pointer'>
                        <FollowerPointerCard title={model.name} className={"w-full  min-h-64 relative bg-gradient-to-t from-purpleText/30 to-purpleText"}>
                            <div className='w-full h-full absolute top-0 left-0' style={{ backgroundImage: `url(${model.model})`, backgroundSize: 'cover', backgroundPosition: 'top' }}></div>

                        </FollowerPointerCard>

                        <div className='w-full h-full flex flex-col p-6 bg-secondaryDark z-20'>
                            <h1 data-aos="fade-up" className='text-xl  font-bold text-headingDark'>{model.name}</h1>
                            <p data-aos="fade-up" className='mt-4 font-merryWeater'>{model.description} </p>
                        </div>



                    </div>
                ))}

            </div>

            <div className='w-full flex z-20 flex-col gap-y-4 justify-center items-center text-center'>
                <Link to={"/portfolio"} className='px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>
                    View Full Portfolio
                </Link>
                <h1 className='font-bold sm:text-4xl text-2xl text-headingDark mt-10' style={{display: 'none'}}>
                    Every design we create carries a little bit of your world <br/>and a whole lot of our care

                </h1>
            </div>


        </div>
    )
}

export default RecentWork


