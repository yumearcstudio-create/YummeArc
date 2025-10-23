import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

import { BsDiscord, BsTwitch, BsTwitter } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'


const MeetArtist = () => {
    const meetArtist = [
        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "celestialpaisley",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825301/1_vftjej.png' },

        { callit: "Nekurai",
              twitter : 'https://x.com/ItsNekurai',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "nekurai.exe",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825341/12_fmdvk3.png' },


        { callit: "MIDNIGHT KENSHI",
              twitter : 'https://x.com/Midnight_Kenshi',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "midnightkenshi",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825302/2_joep1t.png' },

        { callit: "Tsuki Spectra",
              twitter : 'https://x.com/TsukiSpectra',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "tsukispectra",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825304/3_quq6sh.png' },
        
        { callit: "Raven Arc ",
              twitter : 'https://x.com/TheRavenArc',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "itsravenarc",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825310/4_khf95f.png' },

        { callit: "Emma smith",
              twitter : 'https://x.com/emmasmith100?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "emmasmith_",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825323/5_rl8xka.png' },

        { callit: "EMILY JOHNSON:",
              twitter : 'https://x.com/Emily_Johnson55',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "emily_johnson55",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825344/6_izj1db.png' },

        { callit: "ANGELA WRIGHT",
              twitter : 'https://x.com/Angela_Wright56',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "angela_wright56",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825348/7_poxnks.png' },

        { callit: "MIMI NOCTELLE",
              twitter : 'https://x.com/noctellemimi',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "mimi_noctelle",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825324/8_n70c3v.png' },

        { callit: "STARRY MUSE",
              twitter : 'https://x.com/Hey_StarryMuse',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "heystarry",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825363/9_uymfua.png' },

        { callit: "USA LUMINA ",
              twitter : 'https://x.com/Usa_Lumina4',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "usa_lumina4",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825380/10_qqntrd.png' },

        { callit: "SOPHIA BLADE",
              twitter : 'https://x.com/sophia_blade1',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "sophia_blade1",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825332/11_jiek9v.png' },

        { callit: "Aurora Lucas",
              twitter : 'https://x.com/aurora_lucas03',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "aurora_lucas",
        icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754825341/12_fmdvk3.png' },

        

    ]

    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }

    const [isActiveMore, setIsActiveMore] = useState(null);
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
    const visibleArtists = showAll ? meetArtist : meetArtist.slice(0, 6);

    
    return (
        <section className='w-full bg-secondaryDark text-headingDark pb-20  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col justify-center items-center relative min-h-screen'>
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer />
            <h1 data-aos="flip-up" className='  font-kaushans  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                Anime-Loving Artists <br /> Lore-Fueled Creators.

            </h1>
            <div className='w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 gap-4 mt-16 '>
                {meetArtist.map((why, idx) => (
                    <div
                        data-aos="zoom-in"
                        key={idx}
                        onMouseEnter={() => setIsActiveMore(idx)}
                        onMouseLeave={() => setIsActiveMore(null)}
                        className='col-span-1  bg-purple-950 bg-opacity-10 backdrop-blur-sm row-span-1 rounded-xl flex items-center gap-y-6 px-8 py-6 transition-all gap-6'
                        style={{
                            boxShadow:
                                isActive === idx
                                    ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)'
                                    : '0px 1px 3px 2px #2C2839',
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        {/* <img src={why.icon} alt="" className='w-20' /> */}
                        <div className='w-20 h-20' style={{
                            backgroundImage: `url(${why.icon})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                        }}></div>
                        <div className='flex flex-col lg:text-lg text-sm gap-y-2'>
                            <h1 className='text-xl font-semibold font-merryWeater text-headingDark'>
                                {why.callit}
                            </h1>

                            <h1 className='flex gap-x-4 items-center hover:text-purple-300'>
                                <BsDiscord size="1.2em" /> {why.discord}
                            </h1>

                            
                            <a target='__blank' href={why.twitter} className='flex gap-x-4 items-center hover:text-purple-300'>
                                <FaXTwitter size="1.2em" />Twitter
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
             {/* <div className="w-full flex justify-center mt-8 z-20">
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
            </div> */}
            
            <div className='z-20 p-8 text-center space-y-3 rounded-lg bg-pink-950 bg-opacity-10 mt-10 border-[1px] border-headingDark'>
                <h1 className='text-xl '><span className=' font-bold '>Important Note : </span> These are the only official artists working under YummeArc.
                    We do not work with anyone outside this list. Always confirm using our official links before placing an order.</h1>
            </div>

        </section>
    )
}

export default MeetArtist
