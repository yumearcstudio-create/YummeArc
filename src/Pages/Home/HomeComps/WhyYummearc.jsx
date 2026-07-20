import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { whyYummeArc } from '../../../WebData/HomeData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { BackgroundBeamsWithCollision } from '../../../components/ui/background-beams-with-collisions'
import ShadePurple from '../../../Common/ShadePurple'

const WhyYummearc = () => {
  const [isActive, setIsActive] = useState(null)

  const handleActive = (onMouse) => {
    setIsActive(onMouse)
  }
  return (
    <BackgroundBeamsWithCollision className={"min-h-screen"}>
      <div className=' bg-primaryDark flex flex-col justify-center px-4  sm:px-20 xl:px-28 3xl:px-80 py-10  min-h-screen text-textDark space-y-20 relative'>
        <AOSInitializer />
        {/* shading circle hai na idher sai start  */}
        <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-30'} />

        <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-30'} />

        {/* shading circle yaha sai khatam bus ok  */}
        <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />
        <h1 className='w-full text-center font-[600] lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] font-kaushans text-headingDark'>Built for creators who care about their character</h1>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-8 gap-6 mt-16 '>
          {whyYummeArc.map((why, idx) => (
            <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer bg-opacity-40 backdrop-blur-sm  row-span-1 rounded-3xl  flex flex-col justify-center items-center gap-y-6 px-8 py-6 transition-all '
              style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px #2C2839', transition: 'all 0.3s ease-in-out' }}>
              <span className='text-5xl  font-bold text-iconColor'>{why.icon}</span>

              <h1 className='text-xl font-semibold font-merryWeater text-headingDark'>{why.text}</h1>

              <p className='-translate-y-4 font-merryWeater text-center'>{why.para}</p>
            </div>
          ))}
        </div>

        <div className='w-full flex flex-col gap-y-4 justify-center items-center text-center'>
          <h1 data-aos="slide-up" className='font-bold sm:text-4xl text-2xl text-headingDark'>
            A model is more than a drawing. It&rsquo;s how people remember you.
          </h1>
          <p data-aos="slide-up" className='sm:text-xl text-lg max-w-3xl'>
            Your colors, silhouette, expressions, panels, and stream visuals all shape how your audience recognizes you. We bring those pieces together so your character feels consistent everywhere your community sees you.
          </p>
        </div>








      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default WhyYummearc


