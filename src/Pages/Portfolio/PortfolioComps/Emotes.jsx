import React, { useContext, useState } from 'react';
import AOSInitializer from '../../../Common/AOS/AOSInitializer';
import { RxCross1 } from 'react-icons/rx'; // optional close icon
import { ContextAPI } from '../../../GlobalProvider/ContextAPI';

const Emotes = () => {
  const {setIsFormOpen} = useContext(ContextAPI)
  
  const [showImageViewer, setShowImageViewer] = useState()
  const [isActive, setIsActive] = useState(null);

  const [showModalSrc, setShowModalSrc] = useState(null); // url of currently shown media
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // media list (images + videos). Keep as you provided.
  const speaker = [
        { callit: "All-in-One Hype Pack", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804694/1_ey0nxo.jpg' },
        { callit: "Expressive Chibi Emote Pack", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804683/2_ubei3o.jpg' },

        { callit: "Chibi Squad Emote Pack", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804683/3_ahluvs.jpg' },
        { callit: "Hooded Owl Loyalty Badges", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804683/4_rjnbew.jpg' },
        { callit: "Angel Halo Loyalty Badges", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804683/5_aau73r.jpg' },
        { callit: "Twitch Hype Emote", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804683/6_dqtr1r.jpg' },
        { callit: "Baby & Dizzy Emotes", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804684/7_waf4ow.jpg' },
        { callit: "Dance Animated Emote", icon: 'https://res.cloudinary.com/dqflexfdy/video/upload/v1754804685/8_juymka.mp4' },
        { callit: "Custom Twitch Emotes", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804689/9_y1j01k.jpg' },
        { callit: "Twitch Emotes", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754804694/10_srt99o.jpg' },

        { callit: "Chibi Duo Emotes", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754819436/11_wwyyhh.jpg' },
        { callit: "Pink Princess Emote Pack", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754819441/12_vcdpwb.jpg' },
    ]

  // helper -> detect if a url is a video by extension
  const isVideo = (url = '') => {
    return /\.(mp4|webm|ogg|mov|mkv|avi)$/i.test(url);
  };

  const handleActive = (index) => setIsActive(index);

  // open modal viewer for image or video
  const handleShowMedia = (index) => {
    setCurrentMediaIndex(index);
    setShowModalSrc(speaker[index].icon);
    setShowImageViewer(true);
  };

  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  
      const handleShowAll = () => {
          setLoading(true); // loader start
          setTimeout(() => {
              setShowAll(!showAll);
              setLoading(false); // loader stop
          }, 1000); // 1 sec delay simulate (API call ka time)
      };

  const visibleWork = showAll ? speaker : speaker.slice(0, 6);

  // navigate previous
  const prevMedia = (e) => {
    e?.stopPropagation();
    const newIndex = (currentMediaIndex - 1 + speaker.length) % speaker.length;
    setCurrentMediaIndex(newIndex);
    setShowModalSrc(speaker[newIndex].icon);
  };

  // navigate next
  const nextMedia = (e) => {
    e?.stopPropagation();
    const newIndex = (currentMediaIndex + 1) % speaker.length;
    setCurrentMediaIndex(newIndex);
    setShowModalSrc(speaker[newIndex].icon);
  };

  // close viewer
  const closeViewer = () => {
    setShowImageViewer(false);
    setShowModalSrc(null);
  };

  return (
    <section className="w-full bg-primaryDark text-headingDark sm:py-10 py-20 px-4 sm:px-12 xl:px-64 2xl:px-80 xl:pt-40 flex flex-col items-center relative min-h-screen gap-y-10">
      <span
        className="w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark to-transparent"
      />

      <AOSInitializer />

      <h1 data-aos="flip-up" className='  font-kaushans  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full  font-bold text-center'>
                Custom Emotes & Sub Badges
            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center '>
                Bring Your Community to Life with Unique, Expressive Emotes and Badges.
            </p>

      <button onClick={() => setIsFormOpen(true)} className="px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2">
        Request Your Own
      </button>

      <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:gap-8 lg:gap-6 gap-4 mt-6">
        {visibleWork.map((item, idx) => {
          const mediaIsVideo = isVideo(item.icon);
          return (
            <div
              data-aos="zoom-in"
              key={idx}
              onMouseEnter={() => handleActive(idx)}
              onMouseLeave={() => handleActive(null)}
              className="col-span-1 cursor-pointer bg-purple-950 bg-opacity-10 backdrop-blur-sm overflow-hidden row-span-1 rounded-xl flex flex-col items-center transition-all gap-6"
              style={{
                boxShadow:
                  isActive === idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px #2C2839',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {/* media preview area */}
              <div
                onClick={() => handleShowMedia(idx)}
                className="w-full min-h-64 relative bg-gradient-to-t from-purpleText/30 to-purpleText flex items-center justify-center"
              >
                {mediaIsVideo ? (
                  // inline looping muted autoplay video in grid
                  <video
                    src={item.icon}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    // prevent right-click download if you want (not secure)
                  />
                ) : (
                  // image background (keeps same visual you had)
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${item.icon})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                      minHeight: '16rem',
                    }}
                  />
                )}
              </div>

                <h1 className=" lg:text-lg text-sm  sm:p-4 p-2 text-center">{item.callit}</h1>
    
            </div>
          );
        })}
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
                        showAll ? 'View Less Emotes & Badges' : 'View More Emotes & Badges'
                    )}
                </button>
            </div>

      {/* Viewer Modal (image or video) */}
      {showImageViewer && showModalSrc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeViewer}
        >
          {/* left nav */}
          <button
            onClick={(e) => prevMedia(e)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-50"
          >
            ‹
          </button>

          {/* modal content — stopPropagation so clicks inside don't close the overlay */}
          <div className="relative z-50 max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            {/* close button */}
            <button
              onClick={closeViewer}
              className="absolute right-0 top-0 p-2 text-white z-60"
              aria-label="Close"
            >
              <RxCross1 size={28} />
            </button>

            {isVideo(showModalSrc) ? (
              <video
                src={showModalSrc}
                className="max-w-full max-h-[80vh] object-contain"
                controls
                autoPlay
                muted={false}
                loop
                playsInline
              />
            ) : (
              <img
                src={showModalSrc}
                alt="viewer"
                className="max-w-full max-h-[80vh] object-contain"
              />
            )}
          </div>

          {/* right nav */}
          <button
            onClick={(e) => nextMedia(e)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-50"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Emotes;
