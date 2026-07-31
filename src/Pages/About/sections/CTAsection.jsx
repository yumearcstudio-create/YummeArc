import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import Img6 from '../../../Assets/Images/about/6.png'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const CTAsection = () => {
  const { setIsFormOpen } = useContext(ContextAPI)
  return (
    <section className='w-full bg-primaryDark text-headingDark px-4 sm:px-12 xl:px-64 2xl:px-80 py-20 z-30 flex lg:flex-row flex-col justify-between items-center gap-10 relative'>
      <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark to-transparent' />

      <AOSInitializer />

      <div className='lg:w-3/5 w-full lg:text-left text-center flex flex-col items-center lg:items-start gap-y-6 sm:p-8 p-2 z-10'>
        <h1 data-aos="fade-right" className='font-kaushans lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark'>
          Ready to shape your character with us?
        </h1>
        <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm'>
          Bring the lore, references, messy ideas, or just the feeling you want your character to have. We&rsquo;ll help turn it into visuals that feel connected, personal, and ready for stream.
        </p>

        <div className='flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20 justify-center'>
          <button onClick={() => setIsFormOpen(true)} className='px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Start a Project</button>
        </div>
      </div>

      <div data-aos="fade-top" className='sm:px-10'>
        <div className='h-[500px] lg:w-[400px] w-[300px]' style={{ backgroundImage: `url(${Img6})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      </div>
    </section>
  )
}

export default CTAsection
