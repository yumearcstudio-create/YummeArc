import { useContext, useState } from 'react'
import { testimonals_home } from '../../../WebData/HomeData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import TrustPilotBadge from '../../../components/TrustPilotBadge'

const Testimonals = () => {
  const [isActive, setIsActive] = useState(null)
  const { scrwidth , setIsFormOpen } = useContext(ContextAPI)

  const handleActive = (onMouse) => {
    setIsActive(onMouse)
  }
  return (
    <div className='w-full   px-4  sm:px-20 xl:px-28 3xl:px-80 flex flex-col    relative 
         py-10 bg-secondaryDark text-textDark'>
      <AOSInitializer />

      <h1 data-aos="flip-up" className=' font-[600] font-kaushans  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  text-headingDark'>
        What Our Clients Says
      </h1>
      <p data-aos="fade-up" className='font-merryWeater lg:text-lg text-sm w-full my-6  '>Streamers who trusted us and felt seen, styled, and supported.
      </p>

      <div className='w-full flex flex-col  gap-8 mt-6 text-headingDark'>
        <>
          {scrwidth > 640 ? (
            <>
              {testimonals_home.map((testimonal, idx) => (
                <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}

                  className='w-full   relative grid grid-cols-2   transition-all ' >

                  {idx % 2 == 0 ? (
                    <div 
                    style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' , transition: 'all 0.3s ease-in-out' }}
                    
                    className='  col-start-1 col-end-1 p-6 rounded-3xl bg-buttonPrimary'>
                      <h1 className='font-merryWeater'>"{testimonal.review}"</h1>
                      <p className='text-lg font-bold'><i>~{testimonal.client_name}</i></p>
                    </div>
                  ) : (
                    <div 
                    
                    style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' , transition: 'all 0.3s ease-in-out' }}
                    
                    className='  col-start-2 col-end-2 p-6 rounded-3xl bg-buttonPrimary'>
                      <h1 className='font-merryWeater'>"{testimonal.review}"</h1>
                      <p className='text-lg font-bold'><i>~{testimonal.client_name}</i></p>
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <>
              {testimonals_home.map((testimonal, idx) => (
                <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}

                  className='w-full   relative grid grid-cols-2   transition-all  bg-buttonPrimary' >

                  <div style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className='  col-span-2 p-6 rounded-md'>
                      <h1 className='font-merryWeater'>"{testimonal.review}"</h1>
                      <p className='text-lg font-bold'><i>~{testimonal.client_name}</i></p>
                    </div>
                </div>
              ))}
            </>
          )}
        </>
      </div>

        
      <div className='w-full flex flex-col gap-y-4 mt-10 justify-center items-center text-center'>
        <TrustPilotBadge/>
        <h1 className='font-semibold text-2xl'>
          Your story matters too. <br />
          Let’s create your identity together.

        </h1>
        <button onClick={() => setIsFormOpen(true)} className='text-xl bg-buttonPrimary text-headingDark font-semibold px-8 py-2 rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-2 mt-10'>
          Start a Custom Project
        </button>
      </div>


    </div>
  )
}

export default Testimonals
