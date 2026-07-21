import React, { useState } from 'react'
import { recentModels } from '../../../WebData/HomeData'
import { FollowerPointerCard } from '../../../components/ui/following-pointer'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { Link } from 'react-router-dom'
import cinematicVideo from '../../../Assets/Videos/cinematic-stream-intro.mp4'
import { RxCross1 } from 'react-icons/rx'

const RecentWork = () => {
    const [isActive, setIsActive] = useState(null)
    const [showImageViewer, setShowImageViewer] = useState(false)
    const [showModalSrc, setShowModalSrc] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }

    const handleShowImage = (index) => {
        setCurrentImageIndex(index);
        if (recentModels[index].type === 'video') {
            setShowModalSrc(cinematicVideo);
        } else {
            setShowModalSrc(recentModels[index].model);
        }
        setShowImageViewer(true);
    }

    const isVideo = (src) => {
        if (!src) return false;
        return src === cinematicVideo || /\.(mp4|webm|ogg|mov)$/i.test(src);
    }

    const prevMedia = (e) => {
        e?.stopPropagation();
        const visibleModels = recentModels;
        const newIndex = (currentImageIndex - 1 + visibleModels.length) % visibleModels.length;
        setCurrentImageIndex(newIndex);
        if (visibleModels[newIndex].type === 'video') {
            setShowModalSrc(cinematicVideo);
        } else {
            setShowModalSrc(visibleModels[newIndex].model);
        }
    }

    const nextMedia = (e) => {
        e?.stopPropagation();
        const visibleModels = recentModels;
        const newIndex = (currentImageIndex + 1) % visibleModels.length;
        setCurrentImageIndex(newIndex);
        if (visibleModels[newIndex].type === 'video') {
            setShowModalSrc(cinematicVideo);
        } else {
            setShowModalSrc(visibleModels[newIndex].model);
        }
    }

    const closeViewer = () => {
        setShowImageViewer(false);
        setShowModalSrc(null);
    }

    return (
        <>
        <div className='w-full px-4 sm:px-20 xl:px-28 3xl:px-80 bg-primaryDark flex flex-col items-center relative gap-8 py-20 text-textDark'>
            <AOSInitializer />

            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />
            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark to-transparent' />

            <h1 data-aos="flip-up" className='w-full text-center z-20 font-[600] lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark font-kaushans mt-20'>Featured Work</h1>
            <p data-aos="fade-up" className='w-full text-center z-20 text-lg'>A quick look at models, panels, and stream visuals shaped around each creator&rsquo;s character.</p>

            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-8 gap-6'>
                {recentModels.map((model, idx) => (
                    <div data-aos-duration="200" data-aos="flip-right" key={idx} onClick={() => handleShowImage(idx)} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ transform: isActive == idx ? 'scale(1.1)' : 'scale(1)', boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }}
                        className='flex-1 min-h-96 bg-purpleTo rounded-2xl overflow-hidden shadow-md transition-all cursor-pointer'>
                        <FollowerPointerCard title={model.name} className={"w-full min-h-64 relative bg-gradient-to-t from-purpleText/30 to-purpleText"}>
                            {model.type === 'video' ? (
                                <video src={cinematicVideo} autoPlay muted loop playsInline className='w-full h-full object-cover absolute top-0 left-0 z-10 pointer-events-none' />
                            ) : (
                                <div className='w-full h-full absolute top-0 left-0 z-10 pointer-events-none' style={{ backgroundImage: `url(${model.model})`, backgroundSize: 'cover', backgroundPosition: idx === 0 ? 'top' : 'center', backgroundRepeat: 'no-repeat' }}></div>
                            )}
                        </FollowerPointerCard>

                        <div className='w-full h-full flex flex-col p-6 bg-secondaryDark z-20'>
                            <h1 data-aos="fade-up" className='text-xl font-bold text-headingDark'>{model.name}</h1>
                            <p data-aos="fade-up" className='mt-4 font-merryWeater'>{model.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full flex z-20 flex-col gap-y-4 justify-center items-center text-center'>
                <Link to={"/portfolio"} className='px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>
                    View Full Portfolio
                </Link>
            </div>
        </div>

        {showImageViewer && showModalSrc && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={closeViewer}>
                <button onClick={(e) => prevMedia(e)} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-50 cursor-pointer">
                    &#8249;
                </button>

                <div className="relative z-50 max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
                    <button onClick={closeViewer} className="absolute right-0 top-0 p-2 text-white z-60 cursor-pointer" aria-label="Close">
                        <RxCross1 size={28} />
                    </button>

                    {isVideo(showModalSrc) ? (
                        <video src={showModalSrc} className="sm:max-w-[800px] max-w-[90vw] max-h-[80vh] object-contain w-full" controls autoPlay muted={false} loop playsInline />
                    ) : (
                        <img src={showModalSrc} alt="viewer" className="sm:max-w-[800px] max-w-[90vw] max-h-[80vh] object-contain" />
                    )}
                </div>

                <button onClick={(e) => nextMedia(e)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-50 cursor-pointer">
                    &#8250;
                </button>
            </div>
        )}
        </>
    )
}

export default RecentWork
