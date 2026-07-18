import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { Link } from 'react-router-dom';


const FAQs = () => {
    const faqs = [
        {
            question: "Do I need a full reference sheet to start?",
            answer:
                "No. You can send lore, moodboards, Pinterest boards, screenshots, rough notes, or even just a description. We can help shape the visual direction from there.",
        },
        {
            question: "Can I order just one emote, panel, or asset?",
            answer:
                "Yes. You can order a single asset or build a full custom package around your model and stream identity.",
        },
        {
            question: "What if my idea still feels messy?",
            answer:
                "That's completely fine. A lot of creators come to us with scattered references or a feeling they can't fully explain yet. We'll help clarify the direction before moving into the final artwork.",
        },
        {
            question: "Do you offer rigging too?",
            answer:
                "Yes, we can help with Live2D and 3D rigging depending on the project. We'll confirm what's included before starting.",
        },
        {
            question: "How do payments usually work?",
            answer:
                "Most projects start with an upfront payment, with the remaining balance handled before final delivery. Payment details can depend on the project size, and we can discuss what works best before starting.",
        },
        {
            question: "Is the work custom or template-based?",
            answer:
                "Our work is made around your character, lore, references, and stream needs. We don't want your assets to feel like something anyone else could use.",
        },
        {
            question: "Can I use the art commercially?",
            answer:
                "Most projects include commercial use for streaming and content creation unless something different is discussed before starting. We'll make the usage clear before the project begins.",
        },
    ];

    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 z-30 flex md:flex-row flex-col justify-between items-center md:gap-10 gap-4    text-textDark bg-primaryDark relative pt-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />
            <div className='md:w-2/3 w-full  justify-center text-left  flex flex-col  gap-y-6 sm:p-16 p-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Frequently Asked Questions
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>Not sure how the process works yet? Here are a few things creators usually ask before starting a project with YumeArc.

                </p>

                <div className="space-y-6">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="space-y-2 mb-4 z-10">
                            <h1 className="font-semibold">
                                Q{idx + 1 + ")"} {item.question}
                            </h1>
                            <h1 className="">{item.answer}</h1>
                        </div>
                    ))}
                </div>



                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <Link to={"/commission"} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Start a Project</Link>

                    <Link to={"/portfolio"} className=' px-8 py-2 text-white font-semibold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md border-[1px] border-white'> See the Portfolio</Link>
                </div>


            </div>

            <div data-aos="fade-top" className=' md:h-[1000px] h-[600px]  xl:w-[600px] sm:w-[400px] w-[300px]' style={{ backgroundImage: `url("https://res.cloudinary.com/dqflexfdy/image/upload/v1759427863/CHRACHTER_AB-01_dnrhtw.png")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />


        </div>

    )
}

export default FAQs
