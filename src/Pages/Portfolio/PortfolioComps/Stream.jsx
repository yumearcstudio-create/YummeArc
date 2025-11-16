import React, { useContext, useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const Stream = () => {
    const [showImageViewer, setShowImageViewer] = useState()
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }

    const [showModal, setShowModal] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const stream = [
        { callit: "Gearlight 2D Chibi Panel Set", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1763280984/13_fffmyv.jpg' },
        { callit: "Inferno Fox Chibi Panels", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1763280985/14_ztxfd0.jpg' },
        { callit: "Starry Catboy Twitch Panels", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1763280985/15_njyxj7.jpg' },
        { callit: "ChibiFox Twitch Panels", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747083/1_be1m7v.jpg' },
        { callit: "Neon Green Chibi WolfBoy Panels", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747076/2_l5v74w.jpg' },
        { callit: "Retro Pixel Gamer Chibi Panels", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747082/3_wqvtub.jpg' },
        { callit: "Gothic Rose Vampire Overlay Pack", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747075/4_qazinx.jpg' },

        { callit: "Hooded Shadow Stream Overlay Kit", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747080/5_q6ba78.jpg' },
        { callit: "Seducky Mascot Stream Overlay Set", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747084/6_hh8dwy.jpg' },
        { callit: "Chibi Kitty Style Panel", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747078/7_yjiepq.jpg' },
        { callit: "Genshin-Inspired Chibi Panels Hu Tao Theme", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747083/8_vdappe.jpg' },

        { callit: "Kawaii Catgirl Stream Panel Pack", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747086/9_dvjkst.png' },
        { callit: "Travesty Alligator MascotStream Pack", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747083/10_ijhum4.jpg' },
        { callit: "Metal Rock Stream OverlayPack", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747093/11_d9k9c4.jpg' },
        { callit: "Quintuplets Anime AlertOverlay", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754747089/12_hyrnlr.jpg' },

    ]

    const handleShowImage = (index) => {
        setCurrentImageIndex(index);
        setShowModal(stream[index].icon);
        setShowImageViewer(true);
    }

    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(false);
      
          const handleShowAll = () => {
              setLoading(true); // loader start
              setTimeout(() => {
                  setShowAll(!showAll);
                  setLoading(false); // loader stop
              }, 1000); // 1 sec delay simulate (API call ka time)
          };
    // Slice data if not showing all
    const visibleWork = showAll ? stream : stream.slice(0, 6);
    return (
        <section className='w-full bg-secondaryDark text-headingDark  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col  items-center relative min-h-screen gap-y-10 sm:py-10 py-20'>
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />

            <AOSInitializer />
            <h1 data-aos="flip-up" className=' font-kaushans  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full  font-bold text-center'>
                Stream Panels & Custom Overlays
            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center '>
                Chibi-style panels, character-based layouts, and vibrant overlays crafted to match each VTuber’s vibe perfectly.
            </p>

            {/* <button className='  px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Request Your Own</button> */}


            <div className='w-full grid grid-cols-2 lg:grid-cols-3  xl:gap-8 lg:gap-6 gap-4 mt-6 '>
                {visibleWork.map((stream, idx) => (
                    <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer bg-purple-950 bg-opacity-10 backdrop-blur-sm overflow-hidden row-span-1 rounded-xl  flex flex-col   items-center  transition-all gap-6 '
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px #2C2839', transition: 'all 0.3s ease-in-out' }}>
                        {/* <img onClick={() => handleShowImage(idx)} src={stream.icon} alt="" className='w-full md:min-h-80' /> */}
                        <div onClick={() => handleShowImage(idx)} className="w-full  min-h-64 relative bg-gradient-to-t from-purpleText/30 to-purpleText">
                            <div className='w-full h-full ' style={{ backgroundImage: `url(${stream.icon})`, backgroundSize: 'cover', backgroundPosition: 'top' }}></div>

                        </div>

                        <h1 className=' lg:text-lg text-sm  sm:p-4 p-2 text-center'>{stream.callit}</h1>

                    </div>
                ))}
            </div>

           <div className="w-full flex justify-center mt-8 z-20">
                <button
                    onClick={handleShowAll}
                    disabled={loading} // disable while loading
                    className={`px-8 py-2 font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md  
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <svg
                                className="animate-spin h-5 w-5 text-headingDark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            Loading...
                        </span>
                    ) : (
                        showAll ? 'View Less' : 'View More'
                    )}
                </button>
            </div>

            {showImageViewer && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    {/* <span onClick={() => setShowImageViewer(false)} className='top-4 right-4 cursor-pointer text-3xl absolute text-white'><RxCross1/></span> */}
                    <button
                        onClick={() => {
                            const newIndex =
                                (currentImageIndex - 1 + stream.length) %
                                stream.length;
                            setCurrentImageIndex(newIndex);
                            setShowModal(stream[newIndex].icon);
                        }}
                        className="px-4 left-4 top-1/2 text-white text-4xl font-bold z-50"
                    >
                        ‹
                    </button>

                    <div onClick={() => setShowImageViewer(false)} className='w-full h-[100vh] flex justify-center items-center '>
                        <img
                            src={showModal}
                            alt="viewer"
                            className="sm:max-w-full max-w-[80vw] max-h-[90vh] object-contain"
                        />
                    </div>

                    <button
                        onClick={() => {
                            const newIndex = (currentImageIndex + 1) % stream.length;
                            setCurrentImageIndex(newIndex);
                            setShowModal(stream[newIndex].icon);
                        }}
                        className="px-4 right-4 top-1/2 text-white text-4xl font-bold z-50"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    )
}

export default Stream
