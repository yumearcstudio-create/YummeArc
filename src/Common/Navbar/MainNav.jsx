import React, { useContext, useEffect, useState } from 'react'

import { FaArrowAltCircleUp } from 'react-icons/fa';
import logo from '../../Assets/Images/logo1.png'
import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import MobNav from './MobNav';
import { Link, useNavigate } from 'react-router-dom';
import { span } from 'framer-motion/m';



const MainNav = () => {
  const navigate = useNavigate()
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const [scrwidth, setWidth] = useState(window.innerWidth); //state for windows width measuring
  const [isVisible, setIsVisible] = useState(false); // it is for scroll to top button



  const { scrwidth , currPage , setcurrPage , setLoading } = useContext(ContextAPI);

  const handleCurrPage = (page_num , page) => {
        setcurrPage(page_num)
        setLoading(true)
        navigate(page)
        // console.log(page_num)
  }


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down
        setIsNavbarVisible(false);
      } else {
        // User is scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);




  useEffect(() => {

    window.addEventListener('scroll', toggleVisibility);
    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    };

  }, []);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };






  return (
    <>

      {/* button for scrolling to top  */}
      <span onClick={scrollToTop} className={`z-50 fixed sm:bottom-5 bottom-10 ${!isVisible && 'hidden opacity-100'} right-5 lg:text-5xl text-3xl transition-all text-white  bg-buttonPrimary lg:p-2 cursor-pointer rounded-full  `}><FaArrowAltCircleUp /></span>

      {scrwidth > 1280 ? (
        <div className={`w-full fixed font-mPlus  flex justify-between items-center sm:px-28  2xl:px-80 px-4 py-4  z-50 ${isVisible ? 'bg-secondaryDark' : 'bg-secondaryDark'} transition-all text-headingDark` }>
          {/* Logo image started  */}
    
          <span className='cursor-pointer' onClick={() => handleCurrPage("Home" , "/")}>
          <img src={logo} alt="yumearc logo" className='w-28'/>
          </span>
          {/* Logo image done  */}

          <div className='flex justify-center items-center gap-x-6 font-semibold text-headingDark '>
            <div className='flex flex-col group items-center cursor-pointer'>
              <h1 onClick={() => handleCurrPage("Portfolio" , "/portfolio")}  className='text-lg font-bold z-10 '>Portfolio</h1>
              <span className={`w-full transition-all ${currPage == "Portfolio" ? 'translate-y-0 bg-headingDark' : 'group-hover:translate-y-0 -translate-y-4  group-hover:bg-headingDark bg-transparent'} z-0 py-[2px] rounded-full`}/>
            </div>
            <div className='flex flex-col group items-center cursor-pointer'>
              <h1 onClick={() => handleCurrPage("About" , "/about")} className='text-lg font-bold z-10 '>About</h1>
              <span className={`w-full transition-all ${currPage == "About" ? 'translate-y-0 bg-headingDark' : 'group-hover:translate-y-0 -translate-y-4  group-hover:bg-headingDark bg-transparent'} z-0 py-[2px] rounded-full`} />
            </div>

            <div className='flex flex-col group items-center cursor-pointer'>
              <h1 onClick={() => handleCurrPage("Service" , "/service")} className='text-lg font-bold z-10 '>Services</h1>
              <span className={`w-full transition-all ${currPage == "Service" ? 'translate-y-0 bg-headingDark' : 'group-hover:translate-y-0 -translate-y-4  group-hover:bg-headingDark bg-transparent'} z-0 py-[2px] rounded-full`} />
            </div>

            <div className='flex flex-col group items-center cursor-pointer'>
              <h1 onClick={() => handleCurrPage("Commission" , "/commission")} className='text-lg font-bold z-10 '>Commission</h1>
              <span className={`w-full transition-all ${currPage == "Commission" ? 'translate-y-0 bg-headingDark' : 'group-hover:translate-y-0 -translate-y-4  group-hover:bg-headingDark bg-transparent'} z-0 py-[2px] rounded-full`} />
            </div>

            

          </div>


        </div >

      ) : (

        // Nav for small devices is started here 
        <>


          <MobNav />

        </>



      )}

    </>
  )
}

export default MainNav