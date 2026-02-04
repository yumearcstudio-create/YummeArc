import React, { useContext, useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo1.png'
import { ContextAPI } from '../../GlobalProvider/ContextAPI'

const MobNav = () => {
    const { setLoading } = useContext(ContextAPI);
  
  const [isOpen , setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const navigateTo = (page) => {
    setIsOpen(false)
    setLoading(true)
    navigate(page)
  }
  return (
    <div className='w-full p-4  z-50  fixed text-headingDark bg-primaryDark bg-opacity-90 backdrop-blur-sm'>
      <div className='w-full flex justify-between items-center z-50 relative '>
        {/* Logo image started  */}
        {/* <Link to="/" className='w-[15%] h-10    ' style={{ backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/en/e/eb/JDC_Foundation_Logo.png"})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} /> */}

        <Link to="/" >
                  <img src={logo} alt="yumearc logo" className='w-20'/></Link>

        {/* Logo image done  */}
        <span onClick={() => handleIsOpen()} className='text-3xl transition-all'>
          {isOpen ? <RxCross2 /> : <LuMenu/>}
        </span>
      </div>

      <div className='w-full h-screen fixed top-0 left-0 p-4 pt-20 bg-primaryDark z-40  transition-all duration-200'
      style={{transform : isOpen ? 'translateY(0)' : 'translateY(-100%)'}}>
         <div className='grid xs:grid-cols-2 grid-cols-1 gap-6 '>
         <h1 onClick={() => navigateTo("/")} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-6 bg-white/10  '>Home</h1>
         <h1 onClick={() => navigateTo("/portfolio")}  className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-6 bg-white/10  '>Portfolio</h1>
         <h1 onClick={() => navigateTo("/about")} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-6 bg-white/10  '>About </h1>
         <h1 onClick={() => navigateTo("/commission")}  className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl   p-6 bg-white/10 '>Commission </h1>
         <h1 onClick={() => navigateTo("/service")} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-6 bg-white/10 '>Service </h1>
         </div>
         

      </div>
    </div>
  )
}

export default MobNav
// :   