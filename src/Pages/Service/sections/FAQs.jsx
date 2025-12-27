import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { Link } from 'react-router-dom';


const FAQs = () => {
    const faqs = [
        {
            question: "Do I need a reference sheet for a model or panel design?",
            answer:
                "Nope! You can share anything references, your vibe, a Pinterest board, or even just a description. We’ll handle the rest.",
        },
        {
            question: "Can I order just one emote or one panel?",
            answer:
                "Yes, absolutely! We accept both single and bundled orders.",
        },
        {
            question: "What if I want revisions?",
            answer:
                "We offer unlimited revisions until you're satisfied. We're obsessed with making it perfect for you.",
        },
        {
            question: "Do you provide rigging too?",
            answer:
                "Yes! We handle both 2D and 3D rigging in-house. You’ll get everything ready to use.",
        },
        {
            question: "How do payments work?",
            answer:
                "We usually do 50% upfront, 50% on delivery. We accept multiple payment methods including PayPal, Wise, Bank Transfer, and more just let us know what works for you!",
        },
        {
            question: "Is the art fully custom or template-based?",
            answer:
                "Everything is 100% hand drawn from scratch. No templates. No AI tracing. Just pure, personalized art.",
        },
        {
            question: "Can I use the art commercially?",
            answer:
                "Yep! Unless stated otherwise, all deliveries include full commercial rights you're free to stream, monetize, and shine.",
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
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>At YummeArc, every Still got questions? We got answers. And if it's not listed here — just shoot us a message. We're super chill about it.

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
                    <Link to={"/comission"} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Commission</Link>

                    <Link to={"/portfolio"} className=' px-8 py-2 text-white font-semibold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md border-[1px] border-white'> View Portfolio</Link>
                </div>


            </div>

            <div data-aos="fade-top" className=' md:h-[1000px] h-[600px]  xl:w-[600px] sm:w-[400px] w-[300px]' style={{ backgroundImage: `url("https://res.cloudinary.com/dqflexfdy/image/upload/v1759427863/CHRACHTER_AB-01_dnrhtw.png")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />


        </div>

    )
}

export default FAQs
